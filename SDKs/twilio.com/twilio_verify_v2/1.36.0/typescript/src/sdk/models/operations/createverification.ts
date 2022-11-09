import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEVERIFICATION_SERVERS = [
	"https://verify.twilio.com",
];



export class CreateVerificationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateVerificationCreateVerificationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Amount;" })
  amount?: string;

  @Metadata({ data: "form, name=AppHash;" })
  appHash?: string;

  @Metadata({ data: "form, name=Channel;" })
  channel: string;

  @Metadata({ data: "form, name=ChannelConfiguration;" })
  channelConfiguration?: any;

  @Metadata({ data: "form, name=CustomCode;" })
  customCode?: string;

  @Metadata({ data: "form, name=CustomFriendlyName;" })
  customFriendlyName?: string;

  @Metadata({ data: "form, name=CustomMessage;" })
  customMessage?: string;

  @Metadata({ data: "form, name=Locale;" })
  locale?: string;

  @Metadata({ data: "form, name=Payee;" })
  payee?: string;

  @Metadata({ data: "form, name=RateLimits;" })
  rateLimits?: any;

  @Metadata({ data: "form, name=SendDigits;" })
  sendDigits?: string;

  @Metadata({ data: "form, name=TemplateCustomSubstitutions;" })
  templateCustomSubstitutions?: string;

  @Metadata({ data: "form, name=TemplateSid;" })
  templateSid?: string;

  @Metadata({ data: "form, name=To;" })
  to: string;
}


export class CreateVerificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateVerificationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateVerificationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateVerificationCreateVerificationRequest;

  @Metadata()
  security: CreateVerificationSecurity;
}


export class CreateVerificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceVerification?: shared.VerifyV2ServiceVerification;
}
