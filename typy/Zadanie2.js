"use strict";
function prefixer(arg) {
    if (arg.substr(0, 2) === 'ts') {
        return arg;
    }
    else {
        return 'ts' + arg;
    }
}
