import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEMESSAGE_SERVERS = [
	"https://ip-messaging.twilio.com",
];



export class UpdateMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateMessageUpdateMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @Metadata({ data: "form, name=Body;" })
  body?: string;
}


export class UpdateMessageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateMessageRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateMessagePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateMessageUpdateMessageRequest;

  @Metadata()
  security: UpdateMessageSecurity;
}


export class UpdateMessageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ipMessagingV1ServiceChannelMessage?: shared.IpMessagingV1ServiceChannelMessage;
}
