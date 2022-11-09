import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventsV1SubscriptionSubscribedEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=schema_version" })
  schemaVersion?: number;

  @Metadata({ data: "json, name=subscription_sid" })
  subscriptionSid?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
