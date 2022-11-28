import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateVerificationServerList = [
	"https://verify.twilio.com",
] as const;


export class CreateVerificationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateVerificationCreateVerificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Amount;" })
  amount?: string;

  @SpeakeasyMetadata({ data: "form, name=AppHash;" })
  appHash?: string;

  @SpeakeasyMetadata({ data: "form, name=Channel;" })
  channel: string;

  @SpeakeasyMetadata({ data: "form, name=ChannelConfiguration;" })
  channelConfiguration?: any;

  @SpeakeasyMetadata({ data: "form, name=CustomCode;" })
  customCode?: string;

  @SpeakeasyMetadata({ data: "form, name=CustomFriendlyName;" })
  customFriendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=CustomMessage;" })
  customMessage?: string;

  @SpeakeasyMetadata({ data: "form, name=Locale;" })
  locale?: string;

  @SpeakeasyMetadata({ data: "form, name=Payee;" })
  payee?: string;

  @SpeakeasyMetadata({ data: "form, name=RateLimits;" })
  rateLimits?: any;

  @SpeakeasyMetadata({ data: "form, name=SendDigits;" })
  sendDigits?: string;

  @SpeakeasyMetadata({ data: "form, name=TemplateCustomSubstitutions;" })
  templateCustomSubstitutions?: string;

  @SpeakeasyMetadata({ data: "form, name=TemplateSid;" })
  templateSid?: string;

  @SpeakeasyMetadata({ data: "form, name=To;" })
  to: string;
}


export class CreateVerificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateVerificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateVerificationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateVerificationCreateVerificationRequest;

  @SpeakeasyMetadata()
  security: CreateVerificationSecurity;
}


export class CreateVerificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2ServiceVerification?: shared.VerifyV2ServiceVerification;
}
