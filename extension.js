const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.openSingleFile', async () => {
        const fileUri = await vscode.window.showOpenDialog({
            canSelectMany: false,
            openLabel: 'Open',
            filters: {
                'All files': ['*']
            }
        });

        if (fileUri && fileUri[0]) {
            vscode.workspace.openTextDocument(fileUri[0]).then(doc => {
                vscode.window.showTextDocument(doc);
            });
        }
    });

    context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};
