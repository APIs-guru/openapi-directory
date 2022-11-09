import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECHANNELWEBHOOK_SERVERS = [
	"https://ip-messaging.twilio.com",
];



export class CreateChannelWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateChannelWebhookCreateChannelWebhookRequest extends SpeakeasyBase {
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

  @Metadata({ data: "form, name=Type;" })
  type: shared.ChannelWebhookEnumTypeEnum;
}


export class CreateChannelWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateChannelWebhookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateChannelWebhookPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateChannelWebhookCreateChannelWebhookRequest;

  @Metadata()
  security: CreateChannelWebhookSecurity;
}


export class CreateChannelWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ipMessagingV2ServiceChannelChannelWebhook?: shared.IpMessagingV2ServiceChannelChannelWebhook;
}
