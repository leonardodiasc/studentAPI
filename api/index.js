const express = require('express')
const routes = require('./routes')
const app = express()

const port = 3000

routes(app);

app.get('/garota', (req,res)=> res
    .status(200)
    .send({garotadeprograma1: 'cabaré na sala 20'})
)

app.listen(port, ()=> {
    console.log(`tem kabaré na porta ${port}`);
    console.log(`ai uii`);
})

module.exports = app;