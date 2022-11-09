import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// SubscriptionPhase
/** 
 * Describes a phase in a subscription plan. For more information, see
 * [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).
**/
export class SubscriptionPhase extends SpeakeasyBase {
  @Metadata({ data: "json, name=cadence" })
  cadence: string;

  @Metadata({ data: "json, name=ordinal" })
  ordinal?: number;

  @Metadata({ data: "json, name=periods" })
  periods?: number;

  @Metadata({ data: "json, name=recurring_price_money" })
  recurringPriceMoney: Money;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
