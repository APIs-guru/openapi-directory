import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSubscribedEventServerList = [
	"https://events.twilio.com",
] as const;


export class CreateSubscribedEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" })
  subscriptionSid: string;
}


export class CreateSubscribedEventCreateSubscribedEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=SchemaVersion;" })
  schemaVersion?: number;

  @SpeakeasyMetadata({ data: "form, name=Type;" })
  type: string;
}


export class CreateSubscribedEventSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSubscribedEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSubscribedEventPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSubscribedEventCreateSubscribedEventRequest;

  @SpeakeasyMetadata()
  security: CreateSubscribedEventSecurity;
}


export class CreateSubscribedEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  eventsV1SubscriptionSubscribedEvent?: shared.EventsV1SubscriptionSubscribedEvent;
}
