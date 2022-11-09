import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEWEBCHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
];



export class UpdateWebChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateWebChannelUpdateWebChannelRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=ChatStatus;" })
  chatStatus?: shared.WebChannelEnumChatStatusEnum;

  @Metadata({ data: "form, name=PostEngagementData;" })
  postEngagementData?: string;
}


export class UpdateWebChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateWebChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateWebChannelPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateWebChannelUpdateWebChannelRequest;

  @Metadata()
  security: UpdateWebChannelSecurity;
}


export class UpdateWebChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  flexV1WebChannel?: shared.FlexV1WebChannel;
}
