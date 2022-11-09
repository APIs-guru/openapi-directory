import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESUBSCRIBEDEVENT_SERVERS = [
	"https://events.twilio.com",
];



export class CreateSubscribedEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" })
  subscriptionSid: string;
}


export class CreateSubscribedEventCreateSubscribedEventRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=SchemaVersion;" })
  schemaVersion?: number;

  @Metadata({ data: "form, name=Type;" })
  type: string;
}


export class CreateSubscribedEventSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSubscribedEventRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSubscribedEventPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSubscribedEventCreateSubscribedEventRequest;

  @Metadata()
  security: CreateSubscribedEventSecurity;
}


export class CreateSubscribedEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  eventsV1SubscriptionSubscribedEvent?: shared.EventsV1SubscriptionSubscribedEvent;
}
