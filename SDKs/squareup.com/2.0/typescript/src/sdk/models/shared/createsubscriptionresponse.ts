import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Subscription } from "./subscription";


// CreateSubscriptionResponse
/** 
 * Defines the fields that are included in the response from the
 * [CreateSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/create-subscription) endpoint.
**/
export class CreateSubscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=subscription" })
  subscription?: Subscription;
}
