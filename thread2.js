const { syncBuiltinESMExports } = require('module')
const {
    parentPort,
} = require('worker_threads')

function sleep(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}

parentPort.on('message', (data) => {
    const { buffer } = data
    //console.log('modifying sharred array')
    var a = 0
    while(a === 0)
    {
        for(var i = 0; i < 10; i++)
        {
            sleep(2000)
            buffer[i] = 0
            //console.log(buffer)
            parentPort.postMessage({})
        }
        parentPort.postMessage({})
    }
})