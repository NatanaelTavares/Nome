var express = require("express");
const app = express();
var cors = require("cors");
const { Worker } = require('worker_threads')
const sharedArrayBuffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 10);
const buffer = new Int32Array(sharedArrayBuffer)
app.use(cors());

app.get("/url", (req, res, next) =>
{
    console.log("chegou no GET...")
    res.send("Threads inicializadas com sucesso!");

    const thread1 = new Worker('./thread1.js')
    const thread2 = new Worker('./thread2.js')

    console.log('Buffer original (vazio)')
    //console.log(buffer)

    thread1.on('message', (data) => {
        //console.log(buffer)
    })
    thread1.postMessage({ buffer })

    thread2.on('message', (data) => {
        //console.log(buffer)
    })
    thread2.postMessage({ buffer })

    var a = 0
    while(a === 0)
    {
        sleep(1000)
        console.log(buffer)
    }
});

app.listen(443, () =>
{
    console.log("Servidor rodando na porta 443");
});

function sleep(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
}