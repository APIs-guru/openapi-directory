import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PayOrderRequest
/** 
 * Defines the fields that are included in requests to the
 * [PayOrder](https://developer.squareup.com/reference/square_2021-08-18/orders-api/pay-order) endpoint.
**/
export class PayOrderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey: string;

  @Metadata({ data: "json, name=order_version" })
  orderVersion?: number;

  @Metadata({ data: "json, name=payment_ids" })
  paymentIds?: string[];
}
