var ShellExec = function() {};

ShellExec.prototype.say = function(success, fail) {
    cordova.exec(success, fail, "ShellExecPlugin","say", []);
};

var ShellExec = new ShellExec();
module.exports = ShellExec;