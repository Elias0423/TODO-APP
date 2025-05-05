import express, { Application, json, urlencoded } from 'express';
import cors from 'cors';
import 'dotenv/config';
import { env } from './config/utils';

class Index {
  app: Application;

  constructor() {
    const port = env.PORT;
    this.app = express();
    this.app.use(json());
    this.app.use(cors());
    this.app.use(urlencoded({ extended: true }));

    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
export default new Index();
