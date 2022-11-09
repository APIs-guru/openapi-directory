import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyEventOrderFilter
/** 
 * Filter events by the order associated with the event.
**/
export class LoyaltyEventOrderFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=order_id" })
  orderId: string;
}
