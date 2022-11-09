import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECHANNEL_SERVERS = [
	"https://chat.twilio.com",
];



export class UpdateChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateChannelHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ChannelEnumWebhookEnabledTypeEnum;
}


export class UpdateChannelUpdateChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid?: string;

  @Metadata({ data: "form, name=Type;" })
  type?: shared.ChannelEnumChannelTypeEnum;
}


export class UpdateChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateChannelPathParams;

  @Metadata()
  headers: UpdateChannelHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateChannelUpdateChannelRequest;

  @Metadata()
  security: UpdateChannelSecurity;
}


export class UpdateChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  chatV3Channel?: shared.ChatV3Channel;
}
