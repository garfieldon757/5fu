/* eslint-disable no-unreachable */
// 'vscode'模块包含了VS Code extensibility API
// 按下述方式导入这个模块
const vscode = require('vscode');

// function getWebviewContent() {
//   return "<!DOCTYPE html><html lang='en'><body><div>thisisadiv...</div><img src='images/icon.jpeg' width='300' /></body></html>";
// }
function getWebviewContent() {
  return `<img src="https://garfieldon757.github.io/images/fu.svg" width="300" height='300' />`;
}
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
		// vscode.window.showInformationMessage('Hello 5fu!');
    const panel = vscode.window.createWebviewPanel(
      '福', // 只供内部使用，这个webview的标识
      '福', // 给用户显示的面板标题
      vscode.ViewColumn.One, // 给新的webview面板一个编辑器视图
      {} // Webview选项。我们稍后会用上
    );
    // 设置HTML内容
    panel.webview.html = getWebviewContent();

    // 5秒后，程序性地关闭webview面板
    const timeout = setTimeout(() => panel.dispose(), 5000);
    panel.onDidDispose(
      () => {
        // 在第五秒结束之前处理用户手动的关闭动作
        clearTimeout(timeout);
      },
      null,
      context.subscriptions
    );

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
