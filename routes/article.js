import { Router } from "express";
import { getArticle, getArticles, patchArticle, postArticle, removeArticle } from "../controllers/article.js";

const articleRouter= Router();


//we define routes

articleRouter.get('/article',getArticles);

articleRouter.post('/article',postArticle);


articleRouter.patch('/article/:id/:articleSubject',patchArticle);

articleRouter.get('/article/:id',getArticle);


articleRouter.delete('/article/:id',removeArticle);

export default articleRouter;