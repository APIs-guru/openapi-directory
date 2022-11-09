import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscriptionPhase } from "./subscriptionphase";


// CatalogSubscriptionPlan
/** 
 * Describes a subscription plan. For more information, see
 * [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).
**/
export class CatalogSubscriptionPlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=phases", elemType: shared.SubscriptionPhase })
  phases: SubscriptionPhase[];
}
