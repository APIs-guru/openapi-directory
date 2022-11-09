import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESERVICE_SERVERS = [
	"https://verify.twilio.com",
];



export class CreateServiceCreateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CodeLength;" })
  codeLength?: number;

  @Metadata({ data: "form, name=CustomCodeEnabled;" })
  customCodeEnabled?: boolean;

  @Metadata({ data: "form, name=DefaultTemplateSid;" })
  defaultTemplateSid?: string;

  @Metadata({ data: "form, name=DoNotShareWarningEnabled;" })
  doNotShareWarningEnabled?: boolean;

  @Metadata({ data: "form, name=DtmfInputRequired;" })
  dtmfInputRequired?: boolean;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=LookupEnabled;" })
  lookupEnabled?: boolean;

  @Metadata({ data: "form, name=Psd2Enabled;" })
  psd2Enabled?: boolean;

  @Metadata({ data: "form, name=Push.ApnCredentialSid;" })
  pushApnCredentialSid?: string;

  @Metadata({ data: "form, name=Push.FcmCredentialSid;" })
  pushFcmCredentialSid?: string;

  @Metadata({ data: "form, name=Push.IncludeDate;" })
  pushIncludeDate?: boolean;

  @Metadata({ data: "form, name=SkipSmsToLandlines;" })
  skipSmsToLandlines?: boolean;

  @Metadata({ data: "form, name=Totp.CodeLength;" })
  totpCodeLength?: number;

  @Metadata({ data: "form, name=Totp.Issuer;" })
  totpIssuer?: string;

  @Metadata({ data: "form, name=Totp.Skew;" })
  totpSkew?: number;

  @Metadata({ data: "form, name=Totp.TimeStep;" })
  totpTimeStep?: number;

  @Metadata({ data: "form, name=TtsName;" })
  ttsName?: string;
}


export class CreateServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceCreateServiceRequest;

  @Metadata()
  security: CreateServiceSecurity;
}


export class CreateServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2Service?: shared.VerifyV2Service;
}
