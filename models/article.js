import { Schema,model,Types } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const articleSchema=  new Schema ({

        id: {type:String},          
        title: {type:String},         
        content: {type:String},     
        author: {type:String},
        image :{type:String},  
        articleSubject:{type:String,enum:['Coding','Data Mining']}

      
},{
    timestamps:true
});

articleSchema.plugin(toJSON);
export const articleModel = model('Article',articleSchema);