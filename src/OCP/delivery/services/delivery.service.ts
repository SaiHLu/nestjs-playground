import { Injectable, NotFoundException } from '@nestjs/common';
import { IDelivery } from '../interfaces/delivery.interface';
import { DELIVERY_METHOD } from '../delivery-method';

@Injectable()
export class DeliveryService {
  private deliveryGateways: Record<string, IDelivery> = {};

  public registerDeliveryGateway(
    deliveryMethod: DELIVERY_METHOD,
    gateway: IDelivery,
  ) {
    this.deliveryGateways[deliveryMethod] = gateway;
  }

  async deliver(name: string, deliveryMethod: DELIVERY_METHOD): Promise<any> {
    const gateway = this.deliveryGateways[deliveryMethod];

    if (!gateway) throw new NotFoundException('Not Found');

    return gateway.delivery(name);
  }
}
