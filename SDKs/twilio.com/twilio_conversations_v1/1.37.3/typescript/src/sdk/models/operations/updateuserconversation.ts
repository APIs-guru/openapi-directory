import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateUserConversationServerList = [
	"https://conversations.twilio.com",
] as const;


export class UpdateUserConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class UpdateUserConversationUpdateUserConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=LastReadMessageIndex;" })
  lastReadMessageIndex?: number;

  @SpeakeasyMetadata({ data: "form, name=LastReadTimestamp;" })
  lastReadTimestamp?: Date;

  @SpeakeasyMetadata({ data: "form, name=NotificationLevel;" })
  notificationLevel?: shared.UserConversationEnumNotificationLevelEnum;
}


export class UpdateUserConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUserConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateUserConversationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUserConversationUpdateUserConversationRequest;

  @SpeakeasyMetadata()
  security: UpdateUserConversationSecurity;
}


export class UpdateUserConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1UserUserConversation?: shared.ConversationsV1UserUserConversation;
}
