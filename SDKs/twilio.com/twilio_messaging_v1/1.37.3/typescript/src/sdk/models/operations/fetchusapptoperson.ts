import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchUsAppToPersonServerList = [
	"https://messaging.twilio.com",
] as const;


export class FetchUsAppToPersonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MessagingServiceSid" })
  messagingServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchUsAppToPersonSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchUsAppToPersonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchUsAppToPersonPathParams;

  @SpeakeasyMetadata()
  security: FetchUsAppToPersonSecurity;
}


export class FetchUsAppToPersonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  messagingV1ServiceUsAppToPerson?: shared.MessagingV1ServiceUsAppToPerson;
}
