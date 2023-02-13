const app = require('./app');
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({path:path.join(__dirname,"/config/config.env")});

const server = app.listen(process.env.PORT,()=>{
    console.log("server listening to the port ", process.env.PORT,"in ",process.env.NODE_ENV);
});
