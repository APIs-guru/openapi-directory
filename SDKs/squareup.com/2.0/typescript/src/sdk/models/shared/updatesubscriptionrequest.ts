import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Subscription } from "./subscription";


// UpdateSubscriptionRequest
/** 
 * Defines parameters in a
 * [UpdateSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/update-subscription) endpoint
 * request.
**/
export class UpdateSubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=subscription" })
  subscription?: Subscription;
}
