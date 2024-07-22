import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  /* dotenv.config();
  console.log('FACEBOOK_APP_ID:', process.env.FACEBOOK_APP_ID); // Verifica que la variable de entorno se está cargando
  console.log('FACEBOOK_APP_SECRET:', process.env.FACEBOOK_APP_SECRET); // Verifica que la variable de entorno se está cargando */
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  await app.listen(3000);
}
bootstrap();
