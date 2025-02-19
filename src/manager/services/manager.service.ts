import { Inject, Injectable } from '@nestjs/common';
import { data } from '../types/data.interface';

@Injectable()
export class ManagerService {
  constructor(@Inject('Data') private readonly Data: data[]) {}
  getPodcasts(): data[] {
    return this.Data;
  }
  getPodcast(namePodcast: string): data[] {
    return this.Data.filter((item) => item.podcastName === namePodcast);
  }
}
