import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const DELETESUBSCRIBEDEVENT_SERVERS = [
	"https://events.twilio.com",
];



export class DeleteSubscribedEventPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" })
  subscriptionSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Type" })
  type: string;
}


export class DeleteSubscribedEventSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteSubscribedEventRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: DeleteSubscribedEventPathParams;

  @Metadata()
  security: DeleteSubscribedEventSecurity;
}


export class DeleteSubscribedEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
