import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { data } from '../types/data.interface';

@Injectable()
export class ManagerService {
  constructor(@Inject('Data') private readonly Data: data[]) {}
  getPodcasts(): data[] {
    try {
      const info = this.Data;
      if (info) {
        return info;
      }
    } catch (err) {
     throw new HttpException('there are no episodes in your list', HttpStatus.NOT_FOUND);
    }
  }
  getPodcast(namePodcast: string): data[] {
    try {
      const fliteredData = this.Data.filter(
        (item) => item.podcastName === namePodcast,
      );
      if (fliteredData) {
        return fliteredData;
      }
    } catch (err) {
      throw new HttpException(
        'There is no category like that in your podcast list!',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
