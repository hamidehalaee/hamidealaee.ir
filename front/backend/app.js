'use strics';
const express = require('express'),
app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.listen(3000,()=> console.log('connected port 3000'))