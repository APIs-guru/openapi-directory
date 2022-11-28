import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateChannelWebhookServerList = [
	"https://ip-messaging.twilio.com",
] as const;


export class CreateChannelWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateChannelWebhookCreateChannelWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Configuration.Filters;" })
  configurationFilters?: string[];

  @SpeakeasyMetadata({ data: "form, name=Configuration.FlowSid;" })
  configurationFlowSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Configuration.Method;" })
  configurationMethod?: shared.ChannelWebhookEnumMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Configuration.RetryCount;" })
  configurationRetryCount?: number;

  @SpeakeasyMetadata({ data: "form, name=Configuration.Triggers;" })
  configurationTriggers?: string[];

  @SpeakeasyMetadata({ data: "form, name=Configuration.Url;" })
  configurationUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Type;" })
  type: shared.ChannelWebhookEnumTypeEnum;
}


export class CreateChannelWebhookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateChannelWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateChannelWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateChannelWebhookCreateChannelWebhookRequest;

  @SpeakeasyMetadata()
  security: CreateChannelWebhookSecurity;
}


export class CreateChannelWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ipMessagingV2ServiceChannelChannelWebhook?: shared.IpMessagingV2ServiceChannelChannelWebhook;
}
