function log(...args) {
    console.log.apply(null, args);
}

function slow(sec) {
    let start = Date.now();
    while(data.now - start <= sec * 1000);
}

exports.log = log;