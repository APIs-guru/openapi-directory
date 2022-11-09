import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Order } from "./order";


export class CreateOrderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @Metadata({ data: "json, name=order" })
  order?: Order;
}
