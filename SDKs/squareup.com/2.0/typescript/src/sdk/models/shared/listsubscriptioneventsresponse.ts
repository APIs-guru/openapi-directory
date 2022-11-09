import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { SubscriptionEvent } from "./subscriptionevent";


// ListSubscriptionEventsResponse
/** 
 * Defines the fields that are included in the response from the
 * [ListSubscriptionEvents](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/list-subscription-events)
 * endpoint.
**/
export class ListSubscriptionEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=subscription_events", elemType: shared.SubscriptionEvent })
  subscriptionEvents?: SubscriptionEvent[];
}
