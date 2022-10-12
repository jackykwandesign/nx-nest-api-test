import { Module } from '@nestjs/common';
import { AuthModule } from '@node-org/auth';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosService } from './todos/todos.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, TodosService],
})
export class AppModule {}
