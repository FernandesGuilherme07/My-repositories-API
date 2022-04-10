import mongoose from 'mongoose';

const repositorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: URL,
      required: true,
      index: {
        unique: true,
      },
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Repository', repositorySchema);
