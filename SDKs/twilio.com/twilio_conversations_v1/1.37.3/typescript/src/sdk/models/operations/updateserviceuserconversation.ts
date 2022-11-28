import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateServiceUserConversationServerList = [
	"https://conversations.twilio.com",
] as const;


export class UpdateServiceUserConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class UpdateServiceUserConversationUpdateServiceUserConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=LastReadMessageIndex;" })
  lastReadMessageIndex?: number;

  @SpeakeasyMetadata({ data: "form, name=LastReadTimestamp;" })
  lastReadTimestamp?: Date;

  @SpeakeasyMetadata({ data: "form, name=NotificationLevel;" })
  notificationLevel?: shared.ServiceUserConversationEnumNotificationLevelEnum;
}


export class UpdateServiceUserConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceUserConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateServiceUserConversationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceUserConversationUpdateServiceUserConversationRequest;

  @SpeakeasyMetadata()
  security: UpdateServiceUserConversationSecurity;
}


export class UpdateServiceUserConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceUserServiceUserConversation?: shared.ConversationsV1ServiceServiceUserServiceUserConversation;
}
