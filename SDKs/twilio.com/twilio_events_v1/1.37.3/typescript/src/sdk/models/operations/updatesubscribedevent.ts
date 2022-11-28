import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSubscribedEventServerList = [
	"https://events.twilio.com",
] as const;


export class UpdateSubscribedEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" })
  subscriptionSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Type" })
  type: string;
}


export class UpdateSubscribedEventUpdateSubscribedEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=SchemaVersion;" })
  schemaVersion?: number;
}


export class UpdateSubscribedEventSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSubscribedEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSubscribedEventPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSubscribedEventUpdateSubscribedEventRequest;

  @SpeakeasyMetadata()
  security: UpdateSubscribedEventSecurity;
}


export class UpdateSubscribedEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  eventsV1SubscriptionSubscribedEvent?: shared.EventsV1SubscriptionSubscribedEvent;
}
