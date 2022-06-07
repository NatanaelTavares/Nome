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
            if(buffer[0] != 0 && buffer[1] != 0 && buffer[2] != 0 && buffer[3] != 0 && buffer[4] != 0 && buffer[5] != 0 && buffer[6] != 0 && buffer[7] != 0 && buffer[8] != 0 && buffer[9] != 0)
            {
                sleep(10000)
            }
            sleep(1000)
            buffer[i] = i + 1
            //console.log(buffer)
            parentPort.postMessage({})
        }
        parentPort.postMessage({})
    }
})