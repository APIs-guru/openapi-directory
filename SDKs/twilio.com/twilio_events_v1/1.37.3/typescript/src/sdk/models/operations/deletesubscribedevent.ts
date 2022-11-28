import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteSubscribedEventServerList = [
	"https://events.twilio.com",
] as const;


export class DeleteSubscribedEventPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" })
  subscriptionSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Type" })
  type: string;
}


export class DeleteSubscribedEventSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteSubscribedEventRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteSubscribedEventPathParams;

  @SpeakeasyMetadata()
  security: DeleteSubscribedEventSecurity;
}


export class DeleteSubscribedEventResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
