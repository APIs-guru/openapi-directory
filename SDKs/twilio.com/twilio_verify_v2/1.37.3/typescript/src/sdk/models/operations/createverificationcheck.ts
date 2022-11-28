import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateVerificationCheckServerList = [
	"https://verify.twilio.com",
] as const;


export class CreateVerificationCheckPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateVerificationCheckCreateVerificationCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Amount;" })
  amount?: string;

  @SpeakeasyMetadata({ data: "form, name=Code;" })
  code?: string;

  @SpeakeasyMetadata({ data: "form, name=Payee;" })
  payee?: string;

  @SpeakeasyMetadata({ data: "form, name=To;" })
  to?: string;

  @SpeakeasyMetadata({ data: "form, name=VerificationSid;" })
  verificationSid?: string;
}


export class CreateVerificationCheckSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateVerificationCheckRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateVerificationCheckPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateVerificationCheckCreateVerificationCheckRequest;

  @SpeakeasyMetadata()
  security: CreateVerificationCheckSecurity;
}


export class CreateVerificationCheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2ServiceVerificationCheck?: shared.VerifyV2ServiceVerificationCheck;
}
