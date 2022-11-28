import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateMessageServerList = [
	"https://ip-messaging.twilio.com",
] as const;


export class UpdateMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateMessageHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.MessageEnumWebhookEnabledTypeEnum;
}


export class UpdateMessageUpdateMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "form, name=Body;" })
  body?: string;

  @SpeakeasyMetadata({ data: "form, name=DateCreated;" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "form, name=DateUpdated;" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "form, name=From;" })
  from?: string;

  @SpeakeasyMetadata({ data: "form, name=LastUpdatedBy;" })
  lastUpdatedBy?: string;
}


export class UpdateMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateMessagePathParams;

  @SpeakeasyMetadata()
  headers: UpdateMessageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateMessageUpdateMessageRequest;

  @SpeakeasyMetadata()
  security: UpdateMessageSecurity;
}


export class UpdateMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ipMessagingV2ServiceChannelMessage?: shared.IpMessagingV2ServiceChannelMessage;
}
