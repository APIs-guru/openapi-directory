import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESUBSCRIBEDEVENT_SERVERS = [
	"https://events.twilio.com",
];



export class UpdateSubscribedEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" })
  subscriptionSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Type" })
  type: string;
}


export class UpdateSubscribedEventUpdateSubscribedEventRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=SchemaVersion;" })
  schemaVersion?: number;
}


export class UpdateSubscribedEventSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSubscribedEventRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSubscribedEventPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSubscribedEventUpdateSubscribedEventRequest;

  @Metadata()
  security: UpdateSubscribedEventSecurity;
}


export class UpdateSubscribedEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  eventsV1SubscriptionSubscribedEvent?: shared.EventsV1SubscriptionSubscribedEvent;
}
