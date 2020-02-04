/**
 * modal-article: 记录文章相关
 * @param app
 */
export default app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const acticleSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  });
  return mongoose.model("Article", acticleSchema);
};
