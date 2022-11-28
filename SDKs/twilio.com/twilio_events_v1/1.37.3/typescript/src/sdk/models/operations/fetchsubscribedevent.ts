import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchSubscribedEventServerList = [
	"https://events.twilio.com",
] as const;


export class FetchSubscribedEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" })
  subscriptionSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Type" })
  type: string;
}


export class FetchSubscribedEventSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchSubscribedEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchSubscribedEventPathParams;

  @SpeakeasyMetadata()
  security: FetchSubscribedEventSecurity;
}


export class FetchSubscribedEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  eventsV1SubscriptionSubscribedEvent?: shared.EventsV1SubscriptionSubscribedEvent;
}
