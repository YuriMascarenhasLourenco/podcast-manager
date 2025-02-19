import { Module } from '@nestjs/common';
import { ManagerController } from './controller/manager.controller';
import { ManagerService } from './services/manager.service';
import { Data } from './data/podcasts';

@Module({
  controllers: [ManagerController],
  providers: [{ provide: 'Data', useValue: Data }, ManagerService],
})
export class ManagerModule {}
