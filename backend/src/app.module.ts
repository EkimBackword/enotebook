import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TelegramService } from './telegram/telegram.service';
import { LoggerService } from './logger/logger.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
  ],
  providers: [
    AppService,
    UserService,
    TelegramService,
    LoggerService,
  ],
})
export class AppModule {}
