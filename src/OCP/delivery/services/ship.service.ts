import { Logger } from '@nestjs/common';
import { IDelivery } from '../interfaces/delivery.interface';

export class ShipService implements IDelivery {
  private readonly logger = new Logger(ShipService.name);

  async delivery(name: string): Promise<any> {
    this.logger.debug('Handle by Ship: ', name);
    return name;
  }
}
