'use strics';
const express = require('express'),
app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(5000,()=> console.log('connected port 5000'))