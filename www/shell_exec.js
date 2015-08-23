var ShellExec = function () {
};

ShellExec.prototype.exec = function (perintah, success, fail) {
    cordova.exec(success, fail, "ShellExecPlugin", perintah, []);
};

var ShellExec = new ShellExec();
module.exports = ShellExec;