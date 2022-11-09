import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHVERIFICATIONATTEMPT_SERVERS = [
	"https://verify.twilio.com",
];



export class FetchVerificationAttemptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchVerificationAttemptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchVerificationAttemptRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchVerificationAttemptPathParams;

  @Metadata()
  security: FetchVerificationAttemptSecurity;
}


export class FetchVerificationAttemptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2VerificationAttempt?: shared.VerifyV2VerificationAttempt;
}
