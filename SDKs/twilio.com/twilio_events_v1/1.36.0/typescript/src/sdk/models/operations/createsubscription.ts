import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
];



export class CreateSubscriptionCreateSubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Description;" })
  description: string;

  @Metadata({ data: "form, name=SinkSid;" })
  sinkSid: string;

  @Metadata({ data: "form, name=Types;" })
  types: any[];
}


export class CreateSubscriptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSubscriptionCreateSubscriptionRequest;

  @Metadata()
  security: CreateSubscriptionSecurity;
}


export class CreateSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  eventsV1Subscription?: shared.EventsV1Subscription;
}
