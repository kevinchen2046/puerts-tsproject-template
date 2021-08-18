## 工程介绍

- 将该工程放置在`Assets`同级文件夹中,推荐文件夹命名为`project`;
- 该工程不同于`一般nodejs项目`,该工程为`js模块工程`,最终将输出为一个`main.js`.所以在写法上不支持`import`语法.优点则是省去很多的`import语句`.
- 一般情况下不需要额外输入引用语句,但有得时候文件之间会存在一些不确定得引用关系,这个时候则需要使用`/// <reference path="xxx.ts" />`建立强制引用关系.

## 配置介绍
`package.json`node包配置
`tsconfig.json`ts环境配置
`project.json`项目配置
```json
{
    //工作目录 typescrpt存放目录
    "src":"./src",
    //库目录
    "libs":"./libs",
    //输出目录
    "bin":"./bin",
    //uinty资源同步目录
    "bin.uinty":"../Assets/Resources",
    //需要屏蔽的lib库名称
    "exclude.lib": [
        "uuid"
    ]
}
```
注意,项目中必须为启动类`class Main` 建立`Main.ts`

## 工具脚本
- `node cmd/ts_trans.js <foldername>` 帮助将现有的typescript文件转换成JSmodule可用的形式(去除import语句,添加默认modulename为game);

## 安装环境
`npm i`

## 启动编译
`npm run start`

## 注意
由于不能使用import,所以不能随意使用nodejs包
需要自己组织类库,请参考`libs/md5`;