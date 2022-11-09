import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHTOLLFREEVERIFICATION_SERVERS = [
	"https://messaging.twilio.com",
];



export class FetchTollfreeVerificationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchTollfreeVerificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchTollfreeVerificationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchTollfreeVerificationPathParams;

  @Metadata()
  security: FetchTollfreeVerificationSecurity;
}


export class FetchTollfreeVerificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messagingV1TollfreeVerification?: shared.MessagingV1TollfreeVerification;
}
