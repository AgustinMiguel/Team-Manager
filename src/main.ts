import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";

async function bootstrap() {
  const logger = new Logger("bootstrap");
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  await app.listen(3000);
  logger.log(`Application ready on port 3000`);
}
bootstrap();
