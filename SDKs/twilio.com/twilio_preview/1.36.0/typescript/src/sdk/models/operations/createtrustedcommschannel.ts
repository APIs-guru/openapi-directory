import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATETRUSTEDCOMMSCHANNEL_SERVERS = [
	"https://preview.twilio.com",
];



export class CreateTrustedCommsChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=BrandedChannelSid" })
  brandedChannelSid: string;
}


export class CreateTrustedCommsChannelCreateTrustedCommsChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=PhoneNumberSid;" })
  phoneNumberSid: string;
}


export class CreateTrustedCommsChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTrustedCommsChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateTrustedCommsChannelPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTrustedCommsChannelCreateTrustedCommsChannelRequest;

  @Metadata()
  security: CreateTrustedCommsChannelSecurity;
}


export class CreateTrustedCommsChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  previewTrustedCommsBrandedChannelChannel?: shared.PreviewTrustedCommsBrandedChannelChannel;
}
