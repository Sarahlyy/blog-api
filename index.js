import express from "express"
import articleRouter from "./routes/article.js";
import mongoose from "mongoose";
import 'dotenv/config'

await mongoose.connect (process.env.MONGO_URI);


const app =express();
app.use(express.json());

app.use(articleRouter);



app.listen(4000,()=>{
console.log('App is listening on port 4000');
});


