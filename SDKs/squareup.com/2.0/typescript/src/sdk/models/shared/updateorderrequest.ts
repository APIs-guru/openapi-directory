import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Order } from "./order";


// UpdateOrderRequest
/** 
 * Defines the fields that are included in requests to the
 * [UpdateOrder](https://developer.squareup.com/reference/square_2021-08-18/orders-api/update-order) endpoint.
**/
export class UpdateOrderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields_to_clear" })
  fieldsToClear?: string[];

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @Metadata({ data: "json, name=order" })
  order?: Order;
}
