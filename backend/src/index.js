const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotEnv = require('dotenv');
const db = require('./config/config.db');
const router = require('./routers/routes')

const app =  express();
dotEnv.config()

app.use(cors());
app.use(bodyParser.json());
app.use(router)



app.use((req, res) => {
    res.status(400).json({msg:"Endpoint não encontrado"})
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})