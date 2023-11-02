import { IsEnum, IsString } from 'class-validator';
import { DELIVERY_METHOD } from '../delivery-method';

export class DeliveryDto {
  @IsString()
  @IsEnum(DELIVERY_METHOD)
  deliveryMethod: DELIVERY_METHOD;

  @IsString()
  name: string;
}
