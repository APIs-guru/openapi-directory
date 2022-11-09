import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// CreateSubscriptionRequest
/** 
 * Defines parameters in a
 * [CreateSubscription](https://developer.squareup.com/reference/square_2021-08-18/subscriptions-api/create-subscription) endpoint request.
**/
export class CreateSubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=canceled_date" })
  canceledDate?: string;

  @Metadata({ data: "json, name=card_id" })
  cardId?: string;

  @Metadata({ data: "json, name=customer_id" })
  customerId: string;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId: string;

  @Metadata({ data: "json, name=plan_id" })
  planId: string;

  @Metadata({ data: "json, name=price_override_money" })
  priceOverrideMoney?: Money;

  @Metadata({ data: "json, name=start_date" })
  startDate?: string;

  @Metadata({ data: "json, name=tax_percentage" })
  taxPercentage?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;
}
