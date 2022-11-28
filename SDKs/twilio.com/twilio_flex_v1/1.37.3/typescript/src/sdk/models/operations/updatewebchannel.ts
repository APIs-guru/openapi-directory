import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateWebChannelServerList = [
	"https://flex-api.twilio.com",
] as const;


export class UpdateWebChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateWebChannelUpdateWebChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ChatStatus;" })
  chatStatus?: shared.WebChannelEnumChatStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=PostEngagementData;" })
  postEngagementData?: string;
}


export class UpdateWebChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateWebChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateWebChannelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateWebChannelUpdateWebChannelRequest;

  @SpeakeasyMetadata()
  security: UpdateWebChannelSecurity;
}


export class UpdateWebChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  flexV1WebChannel?: shared.FlexV1WebChannel;
}
