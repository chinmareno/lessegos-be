import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: process.env.CLIENT_URL! });
  const port = process.env.PORT ?? 3001;
  await app.listen(port);
  console.log('run on port ' + port);
}
bootstrap();
