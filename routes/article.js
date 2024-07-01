import { Router } from "express";
import { getArticle, getArticles, patchArticle, patchfavorite, postArticle, removeArticle } from "../controllers/article.js";

const articleRouter= Router();


//we define routes

articleRouter.get('/article',getArticles);

articleRouter.post('/article',postArticle);


articleRouter.patch('/article/:id',patchArticle);

articleRouter.get('/article/:id',getArticle);

// articleRouter.patch('/article/:id/:articleSubject',patchArticle);

articleRouter.patch('/article/:id',patchfavorite);

articleRouter.delete('/article/:id',removeArticle);

export default articleRouter;