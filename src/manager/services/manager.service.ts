import { Injectable } from '@nestjs/common';
import { Data } from '../data/podcasts';
import { data } from '../types/data.interface';

@Injectable()
export class ManagerService {
  getPodcasts(): data[] {
    return Data;
  }
  getPodcast(namePodcast: string): data[] {
    return Data.filter((item) => item.podcastName === namePodcast);
  }
}
