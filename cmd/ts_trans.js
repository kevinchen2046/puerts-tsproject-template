// 将 ts nodejs风格转换成 module风格

const fs = require("fs");

function getFiles(folder, results) {
    if (!results) results = [];
    var files = fs.readdirSync(folder);
    for (var file of files) {
        var filePath = `${folder}/${file}`;
        if (fs.statSync(filePath).isDirectory()) {
            results = results.concat(getFiles(filePath));
        } else {
            results.push(filePath);
        }
    }
    return results;
}

function trans(folder){
    var files = getFiles(folder);

    files.forEach((v, i) => {
        var content = fs.readFileSync(v, "utf-8").toString();
        // if (content.charAt(0) == "}") {
        //     content = content.substring(1) + "\n}";
        // }
        var lines = content.split("\n");
        if (content.indexOf("module game") == -1) {
            lines.map(v => {
                return `    ${v}`
            });
    
            lines.unshift(`module game {`);
            lines.push(`}`);
        }
        lines = lines.filter(v => {
            if (v.trim().indexOf("import") == 0) return false;
            return true;
        })
        content = lines.join("\n");
        content = content.replace("export default class", "export class");
        fs.writeFileSync(v, content);
        console.log(((i + 1) / files.length * 100) + "%");
    })
    console.log("over!");
}

trans(process.argv[2]);
