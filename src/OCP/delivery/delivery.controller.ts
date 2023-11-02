import { Body, Controller, Post } from '@nestjs/common';
import { DeliveryService } from './services/delivery.service';
import { DeliveryDto } from './dto/delivery.dto';
import { DELIVERY_METHOD } from './delivery-method';
import { CarService } from './services/car.service';
import { ShipService } from './services/ship.service';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Post()
  async deliver(@Body() body: DeliveryDto) {
    switch (body.deliveryMethod) {
      case 'car':
        this.deliveryService.registerDeliveryGateway(
          DELIVERY_METHOD.CAR,
          new CarService(),
        );

        return this.deliveryService.deliver(body.name, body.deliveryMethod);

      case 'ship':
        this.deliveryService.registerDeliveryGateway(
          DELIVERY_METHOD.SHIP,
          new ShipService(),
        );

        return this.deliveryService.deliver(body.name, body.deliveryMethod);

      default:
        return 'Not Found';
    }
  }
}
