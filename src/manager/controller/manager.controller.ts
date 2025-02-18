import { Controller, Get, Query } from '@nestjs/common';
import { ManagerService } from '../services/manager.service';

@Controller('manager')
export class ManagerController {
    constructor(private readonly managerService:ManagerService){}
    @Get('list')
    getPodcastsList(){
        this.managerService.getPodcasts()
    }
    @Get()
    getPodcast(@Query() podcastName:string){
        this.managerService.getPodcasts(podcastName)
    }
}
