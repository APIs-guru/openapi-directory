import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECHANNELWEBHOOK_SERVERS = [
	"https://ip-messaging.twilio.com",
];



export class UpdateChannelWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateChannelWebhookUpdateChannelWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Configuration.Filters;" })
  configurationFilters?: string[];

  @Metadata({ data: "form, name=Configuration.FlowSid;" })
  configurationFlowSid?: string;

  @Metadata({ data: "form, name=Configuration.Method;" })
  configurationMethod?: shared.ChannelWebhookEnumMethodEnum;

  @Metadata({ data: "form, name=Configuration.RetryCount;" })
  configurationRetryCount?: number;

  @Metadata({ data: "form, name=Configuration.Triggers;" })
  configurationTriggers?: string[];

  @Metadata({ data: "form, name=Configuration.Url;" })
  configurationUrl?: string;
}


export class UpdateChannelWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateChannelWebhookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateChannelWebhookPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateChannelWebhookUpdateChannelWebhookRequest;

  @Metadata()
  security: UpdateChannelWebhookSecurity;
}


export class UpdateChannelWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ipMessagingV2ServiceChannelChannelWebhook?: shared.IpMessagingV2ServiceChannelChannelWebhook;
}
