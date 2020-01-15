// 'vscode'模块包含了VS Code extensibility API
// 按下述方式导入这个模块
const vscode = require('vscode');

// 一旦你的插件激活，vscode会立刻调用下述方法
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	 // 用console输出诊断信息(console.log)和错误(console.error)
    // 下面的代码只会在你的插件激活时执行一次
	console.log('Congratulations, your extension "fugenerator" is now active!');
// 入口命令已经在package.json文件中定义好了，现在调用registerCommand方法
    // registerCommand中的参数必须与package.json中的command保持一致
	let disposable = vscode.commands.registerCommand('extension.5fu', function () {
		// 把你的代码写在这里，每次命令执行时都会调用这里的代码
    // ...
    // 给用户显示一个消息提示
		vscode.window.showInformationMessage('Hello 5fu!');
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
