import * as express from 'express';
import { helloworld } from './helloworld';

const app: express.Application = express();

app.get('/', (req: express.Request, res: express.Response) =>
  res.send(helloworld('hello world! '))
);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
