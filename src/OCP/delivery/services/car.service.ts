import { Logger } from '@nestjs/common';
import { IDelivery } from '../interfaces/delivery.interface';

export class CarService implements IDelivery {
  private readonly logger = new Logger(CarService.name);

  async delivery(name: string): Promise<any> {
    this.logger.debug('Handle By Car: ', name);
    return name;
  }
}
