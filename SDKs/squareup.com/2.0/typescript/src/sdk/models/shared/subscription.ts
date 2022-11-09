import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// Subscription
/** 
 * Represents a customer subscription to a subscription plan.
 * For an overview of the `Subscription` type, see
 * [Subscription object](https://developer.squareup.com/docs/subscriptions-api/overview#subscription-object-overview).
**/
export class Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=canceled_date" })
  canceledDate?: string;

  @Metadata({ data: "json, name=card_id" })
  cardId?: string;

  @Metadata({ data: "json, name=charged_through_date" })
  chargedThroughDate?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=customer_id" })
  customerId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=invoice_ids" })
  invoiceIds?: string[];

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=plan_id" })
  planId?: string;

  @Metadata({ data: "json, name=price_override_money" })
  priceOverrideMoney?: Money;

  @Metadata({ data: "json, name=start_date" })
  startDate?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=tax_percentage" })
  taxPercentage?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
