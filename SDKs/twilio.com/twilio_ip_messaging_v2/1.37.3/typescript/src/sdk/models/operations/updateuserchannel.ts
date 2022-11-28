import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateUserChannelServerList = [
	"https://ip-messaging.twilio.com",
] as const;


export class UpdateUserChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class UpdateUserChannelUpdateUserChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=LastConsumedMessageIndex;" })
  lastConsumedMessageIndex?: number;

  @SpeakeasyMetadata({ data: "form, name=LastConsumptionTimestamp;" })
  lastConsumptionTimestamp?: Date;

  @SpeakeasyMetadata({ data: "form, name=NotificationLevel;" })
  notificationLevel?: shared.UserChannelEnumNotificationLevelEnum;
}


export class UpdateUserChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUserChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateUserChannelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUserChannelUpdateUserChannelRequest;

  @SpeakeasyMetadata()
  security: UpdateUserChannelSecurity;
}


export class UpdateUserChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ipMessagingV2ServiceUserUserChannel?: shared.IpMessagingV2ServiceUserUserChannel;
}
