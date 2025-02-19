import { Controller, Get, Query } from '@nestjs/common';
import { ManagerService } from '../services/manager.service';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}
  @Get('list')
  getPodcastsList() {
    this.managerService.getPodcasts();
  }
  @Get('getPodcast')
  getPodcast(@Query('podcastName') podcastName: string) {
    this.managerService.getPodcast(podcastName);
  }
}
