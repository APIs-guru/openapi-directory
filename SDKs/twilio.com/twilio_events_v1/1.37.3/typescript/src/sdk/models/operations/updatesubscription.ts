import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSubscriptionServerList = [
	"https://events.twilio.com",
] as const;


export class UpdateSubscriptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSubscriptionUpdateSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Description;" })
  description?: string;

  @SpeakeasyMetadata({ data: "form, name=SinkSid;" })
  sinkSid?: string;
}


export class UpdateSubscriptionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSubscriptionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSubscriptionUpdateSubscriptionRequest;

  @SpeakeasyMetadata()
  security: UpdateSubscriptionSecurity;
}


export class UpdateSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  eventsV1Subscription?: shared.EventsV1Subscription;
}
