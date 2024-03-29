const {ServerConfig,Logger,Queue} = require('./config');
const express = require('express');
const app =express();
const apiRoutes =require('./routes');
const Crons = require('./utils/common/cron_jobs');





app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT,async function exec(){
    console.log(`Successfully started the server on ${ServerConfig.PORT}`);
    Crons();
    Logger.info("Success",{});
    await Queue.connectQueue();
    console.log("queue connected");
});