import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateServiceServerList = [
	"https://verify.twilio.com",
] as const;


export class CreateServiceCreateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CodeLength;" })
  codeLength?: number;

  @SpeakeasyMetadata({ data: "form, name=CustomCodeEnabled;" })
  customCodeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=DefaultTemplateSid;" })
  defaultTemplateSid?: string;

  @SpeakeasyMetadata({ data: "form, name=DoNotShareWarningEnabled;" })
  doNotShareWarningEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=DtmfInputRequired;" })
  dtmfInputRequired?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=LookupEnabled;" })
  lookupEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Psd2Enabled;" })
  psd2Enabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Push.ApnCredentialSid;" })
  pushApnCredentialSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Push.FcmCredentialSid;" })
  pushFcmCredentialSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Push.IncludeDate;" })
  pushIncludeDate?: boolean;

  @SpeakeasyMetadata({ data: "form, name=SkipSmsToLandlines;" })
  skipSmsToLandlines?: boolean;

  @SpeakeasyMetadata({ data: "form, name=Totp.CodeLength;" })
  totpCodeLength?: number;

  @SpeakeasyMetadata({ data: "form, name=Totp.Issuer;" })
  totpIssuer?: string;

  @SpeakeasyMetadata({ data: "form, name=Totp.Skew;" })
  totpSkew?: number;

  @SpeakeasyMetadata({ data: "form, name=Totp.TimeStep;" })
  totpTimeStep?: number;

  @SpeakeasyMetadata({ data: "form, name=TtsName;" })
  ttsName?: string;
}


export class CreateServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceCreateServiceRequest;

  @SpeakeasyMetadata()
  security: CreateServiceSecurity;
}


export class CreateServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2Service?: shared.VerifyV2Service;
}
