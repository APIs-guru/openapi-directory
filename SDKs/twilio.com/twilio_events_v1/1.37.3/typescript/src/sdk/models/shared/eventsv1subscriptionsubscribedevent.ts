import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventsV1SubscriptionSubscribedEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=schema_version" })
  schemaVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=subscription_sid" })
  subscriptionSid?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
