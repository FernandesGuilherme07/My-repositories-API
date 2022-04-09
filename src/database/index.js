import mongoose from 'mongoose';

import config from '../config/db';

class Database {
  constructor() {
    this.connection = mongoose.connect(
      config.url,
      {
        useNetUrlParser: true,
        useUnifiedTopology: true,
      },
    );
  }
}

export default new Database();
