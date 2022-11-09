import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESUBSCRIPTION_SERVERS = [
	"https://events.twilio.com",
];



export class UpdateSubscriptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSubscriptionUpdateSubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Description;" })
  description?: string;

  @Metadata({ data: "form, name=SinkSid;" })
  sinkSid?: string;
}


export class UpdateSubscriptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSubscriptionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSubscriptionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSubscriptionUpdateSubscriptionRequest;

  @Metadata()
  security: UpdateSubscriptionSecurity;
}


export class UpdateSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  eventsV1Subscription?: shared.EventsV1Subscription;
}
