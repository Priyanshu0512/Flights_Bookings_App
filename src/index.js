const {Serverconfig,Logger} = require('./config');
const express = require('express');
const app =express();
const apiRoutes =require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',apiRoutes);

app.listen(Serverconfig.PORT,function exec(){
    console.log(`Successfully started the server on ${Serverconfig.PORT}`);
    Logger.info("Success",{});
})