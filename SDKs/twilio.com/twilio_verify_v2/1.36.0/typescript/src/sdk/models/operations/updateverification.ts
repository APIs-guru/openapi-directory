import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEVERIFICATION_SERVERS = [
	"https://verify.twilio.com",
];



export class UpdateVerificationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateVerificationUpdateVerificationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Status;" })
  status: shared.VerificationEnumStatusEnum;
}


export class UpdateVerificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateVerificationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateVerificationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateVerificationUpdateVerificationRequest;

  @Metadata()
  security: UpdateVerificationSecurity;
}


export class UpdateVerificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceVerification?: shared.VerifyV2ServiceVerification;
}
