import Koa from 'koa'
import cors from '@koa/cors';

const app = new Koa();
app.use(cors());
app.use(async ctx => {
  ctx.body = {
    url: "https://media.giphy.com/media/mclIrdXBRQQcz32epS/giphy-downsized-large.gif"
  }
});


app.listen(3000, () => {
  console.log("Listening on port 3000")
});
