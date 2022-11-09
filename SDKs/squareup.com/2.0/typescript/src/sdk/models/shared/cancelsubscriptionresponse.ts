import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Subscription } from "./subscription";


// CancelSubscriptionResponse
/** 
 * Defines fields that are included in a
 * [CancelSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/cancel-subscription) response.
**/
export class CancelSubscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=subscription" })
  subscription?: Subscription;
}
