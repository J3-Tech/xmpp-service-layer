exports.platform = function () {
    switch(process.platform){
        case 'win32':
            dep='win';
            break;
        case 'linux':
        case 'mac':
            dep=process.platform;
    }

    return 'node-' + dep;
};