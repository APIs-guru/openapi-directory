import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";
import { Subscription } from "./subscription";


// ResumeSubscriptionResponse
/** 
 * Defines parameters in a
 * [ResumeSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/resume-subscription) endpoint
 * response.
**/
export class ResumeSubscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=subscription" })
  subscription?: Subscription;
}
