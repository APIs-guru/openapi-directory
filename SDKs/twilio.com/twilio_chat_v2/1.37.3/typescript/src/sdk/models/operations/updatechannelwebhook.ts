import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateChannelWebhookServerList = [
	"https://chat.twilio.com",
] as const;


export class UpdateChannelWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateChannelWebhookUpdateChannelWebhookRequest extends SpeakeasyBase {
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
}


export class UpdateChannelWebhookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateChannelWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateChannelWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateChannelWebhookUpdateChannelWebhookRequest;

  @SpeakeasyMetadata()
  security: UpdateChannelWebhookSecurity;
}


export class UpdateChannelWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  chatV2ServiceChannelChannelWebhook?: shared.ChatV2ServiceChannelChannelWebhook;
}
