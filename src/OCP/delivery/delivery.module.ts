import { Module } from '@nestjs/common';
import { DeliveryService } from './services/delivery.service';
import { DeliveryController } from './delivery.controller';

@Module({
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}
