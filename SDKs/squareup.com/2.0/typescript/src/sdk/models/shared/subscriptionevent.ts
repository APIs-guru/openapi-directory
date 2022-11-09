import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SubscriptionEvent
/** 
 * Describes changes to subscription and billing states.
**/
export class SubscriptionEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=effective_date" })
  effectiveDate: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=info" })
  info?: any;

  @Metadata({ data: "json, name=plan_id" })
  planId: string;

  @Metadata({ data: "json, name=subscription_event_type" })
  subscriptionEventType: string;
}
