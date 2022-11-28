import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSubscriptionServerList = [
	"https://events.twilio.com",
] as const;


export class CreateSubscriptionCreateSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Description;" })
  description: string;

  @SpeakeasyMetadata({ data: "form, name=SinkSid;" })
  sinkSid: string;

  @SpeakeasyMetadata({ data: "form, name=Types;" })
  types: any[];
}


export class CreateSubscriptionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSubscriptionCreateSubscriptionRequest;

  @SpeakeasyMetadata()
  security: CreateSubscriptionSecurity;
}


export class CreateSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  eventsV1Subscription?: shared.EventsV1Subscription;
}
