import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateTrustedCommsChannelServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateTrustedCommsChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=BrandedChannelSid" })
  brandedChannelSid: string;
}


export class CreateTrustedCommsChannelCreateTrustedCommsChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=PhoneNumberSid;" })
  phoneNumberSid: string;
}


export class CreateTrustedCommsChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTrustedCommsChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateTrustedCommsChannelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTrustedCommsChannelCreateTrustedCommsChannelRequest;

  @SpeakeasyMetadata()
  security: CreateTrustedCommsChannelSecurity;
}


export class CreateTrustedCommsChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewTrustedCommsBrandedChannelChannel?: shared.PreviewTrustedCommsBrandedChannelChannel;
}
