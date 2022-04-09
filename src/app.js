import express, { Router } from 'express';
import cors from 'cors';

class App {
  constructor() {
    this.app = express();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    const routes = new Router();

    this.server.use(routes);
  }
}

export default App().server;
