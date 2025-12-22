import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverless from 'serverless-http';
import { createServer } from 'http';

// let cachedServer: any;

// async function bootstrap() {
//   if (!cachedServer) {
//     console.log('object');
//     const app = await NestFactory.create(AppModule);
//     app.enableCors();

//     await app.init();

//     const expressApp = app.getHttpAdapter().getInstance();

//     cachedServer = serverless(expressApp);
//   }

//   return cachedServer;
// }

// export default async function handler(req: any, res: any) {
//   const server = await bootstrap();
//   return server(req, res);
// }

// const server = createServer((req, res) => {
//   return handler(req, res);
// });

// server.listen(3001, () =>
//   console.log('Serverless handler listening on http://localhost:3001'),
// );

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  console.log('run on port ' + port);
}
bootstrap();
