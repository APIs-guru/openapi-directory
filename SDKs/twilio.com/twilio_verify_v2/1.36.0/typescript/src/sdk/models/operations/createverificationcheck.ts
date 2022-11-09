import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEVERIFICATIONCHECK_SERVERS = [
	"https://verify.twilio.com",
];



export class CreateVerificationCheckPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateVerificationCheckCreateVerificationCheckRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Amount;" })
  amount?: string;

  @Metadata({ data: "form, name=Code;" })
  code?: string;

  @Metadata({ data: "form, name=Payee;" })
  payee?: string;

  @Metadata({ data: "form, name=To;" })
  to?: string;

  @Metadata({ data: "form, name=VerificationSid;" })
  verificationSid?: string;
}


export class CreateVerificationCheckSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateVerificationCheckRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateVerificationCheckPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateVerificationCheckCreateVerificationCheckRequest;

  @Metadata()
  security: CreateVerificationCheckSecurity;
}


export class CreateVerificationCheckResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceVerificationCheck?: shared.VerifyV2ServiceVerificationCheck;
}
