import { NestFactory } from '@nestjs/core';
import { ManagerModule } from './manager/manager.module';

async function bootstrap() {
  const app = await NestFactory.create(ManagerModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
