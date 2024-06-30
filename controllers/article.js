import { Error } from "mongoose";
import { articleModel } from "../models/article.js";




export const getArticles = async (req, res,next) => {
    try {
        const allArticles = await articleModel.find();
        res.json(allArticles);
    } catch(error) {
        next(error);
    }
};


export const postArticle = async (req, res,next) => {
    try {
        const newArticle = await articleModel.create(req.body)
        res.json(newArticle);
    } catch (error) {
        next(error);
    }
};


export const getArticle = async (req, res,next) => {
    try {
        const anArticle = await articleModel.findById(req.params.id)
        res.json(anArticle);
    } catch (error) {
        next(error);
    }
};

export const removeArticle = async (req, res,next) => {
    try {
        const anArticle = await articleModel.findByIdAndDelete(req.params.id)
        res.json(anArticle);
    } catch (error) {
        next(error);
    }
};


export const patchArticle = async (req, res,next) => {
    try {
        const subject = req.body.articleSubject
        const addData = await articleModel.findByIdAndUpdate(req.params.id, { articleSubject:subject },)
        res.json(addData)

    } catch (error) {
        next(error);
    }
};
    