const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

const port = process.env.PORT || 4000;

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? process.env.CLIENT_URL_PROD
      : process.env.CLIENT_URL_DEV,
  credentials: true,
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

app.get("/",(req,res)=>{
    res.send({data:"hello"})
});

app.get("/users",(req,res)=>{
    res.send({data:[{id:1,name:"ramesh"},{id:2,name:"suresh"}]});
});

app.listen(port,()=>{
    console.log(`server stated at ${port}`);
});

