import express from 'express';
import cors from "cors";
module.exports = app => {

  // Settings
  app.set('port', process.env.PORT || 3000);
  app.set('json spaces', 4);

  // middlewares
  app.use(cors());
  app.use(express.json());
  app.use((req, res, next) => {
    // delete req.body.id;
    next();
  });

};