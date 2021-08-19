const fs = require('fs');
const path = require('path');
const gulp = require('gulp');
require('colors');
/**
* 执行命令
* @param {string} cmd 命令全称
* @param {Function} formatOutMethod 回调
*/
async function runcmd(cmd, formatOutMethod) {
  return new Promise((relove, reject) => {
    var childProcess = require('child_process');
    log('start cmd:' + cmd, "Command");
    var handler = childProcess.exec(cmd, {
      encoding: 'buffer',
      timeout: 0, /*子进程最长执行时间 */
      maxBuffer: 1024 * 1024
    });
    function errHandler(data) {
      var err = `${data.toString().split('\n').filter(v => v.trim() != "").join('\n')}`;
      log(formatOutMethod ? formatOutMethod(err) : err, "Command");
    }
    function exitHandler(code) {
      handler.stdout.removeListener('data', errHandler);
      handler.stderr.removeListener('data', errHandler);
      handler.removeListener('exit', exitHandler);
      relove(code);
    }
    handler.stdout.on('data', errHandler);
    handler.stderr.on('data', errHandler);
    handler.on('exit', exitHandler);
  });
}
function clearFolder(folder) {
  var files = fs.readdirSync(folder);
  for (var file of files) {
    var filepath = `${folder}/${file}`;
    if (fs.statSync(filepath).isDirectory()) {
      clearFolder(filepath);
      fs.rmdirSync(filepath);
    } else {
      fs.unlinkSync(filepath);
    }
  }
}

function copyFile(folder, outfolder) {
  var files = fs.readdirSync(folder);
  files.forEach(v => {
    var filepath = `${folder}/${v}`;
    if (fs.statSync(filepath).isFile()) {
      var outpath = (outfolder + "/" + path.basename(filepath));
      var content = fs.readFileSync(filepath, "utf-8");
      fs.writeFileSync(outpath + ".txt", content, "utf-8");
    }
  })
}

function log(content, tag) {
  console.log(`[${new Date().toLocaleTimeString().gray}]`, tag ? tag : "Finished", " >", content);
}
////////////////////////////////////////////////////////////////

const projectconfig = JSON.parse(fs.readFileSync("project.json", "utf-8"));

async function prebuild() {
  clearFolder(projectconfig.bin);
  log("clean done.".cyan);
};
async function afterbuild() {
  var content = fs.readFileSync(`${projectconfig.bin}/main.js`, "utf-8");
  var declare = `const csharp=require('csharp');\nconst UnityEngine=csharp.UnityEngine;\nconst System=csharp.System;\n`;
  var files = fs.readdirSync(projectconfig.libs);
  for (var file of files) {
    if (projectconfig['exclude.lib'].indexOf(file) >= 0) continue;
    var childFolder = `${projectconfig.libs}/${file}`;
    if (fs.statSync(childFolder).isFile()) continue;
    var childfiles = fs.readdirSync(childFolder);
    var mergejs = false;
    for (var childfile of childfiles) {
      if (path.extname(childfile) == ".js") {
        content = fs.readFileSync(`${childFolder}/${childfile}`, "utf-8") + content;
        mergejs = true;
      }
    }
    if (!mergejs) {
      if (file == "csharp") continue;
      if (file == "puerts") continue;
      declare += `const ${file}=csharp.${file};\n`;
    }
  }

  content = declare + content;
  log("add declare done.".cyan);
  content += "\nnew Main();"
  log("add launcher done.".cyan);
  fs.writeFileSync(`${projectconfig["bin.unity"]}/main.js.txt`, content, "utf-8");
  if (fs.existsSync(`${projectconfig.bin}/main.js.map`)) fs.writeFileSync(`${projectconfig["bin.unity"]}/main.js.map.txt`, fs.readFileSync(`${projectconfig.bin}/main.js.map`));
  log("sync done.".cyan);
};

async function build() {
  var code = await runcmd(`tsc --outFile ${projectconfig.bin}/main.js`, (err) => {
    return err.split(':').map((v, i) => {
      if(i==0) return v.cyan.underline;
      if(i==1) return v.red;
      if(i==2) return v.yellow;
      return v;
    }).join(":");
  });
  if (code != 0) {
    return Promise.resolve("compile fail.");
  } else {
    log("compile done.".cyan);
    return Promise.resolve();
  }
};

exports.prebuild = prebuild;
exports.build = build;
exports.afterbuild = afterbuild;
exports.default = async function () {
  var err = await build();
  if (err) {
    log(err.red, "Error: ");
    return Promise.resolve();
  }
  await afterbuild();
}