import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEUSERCONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateUserConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class UpdateUserConversationUpdateUserConversationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=LastReadMessageIndex;" })
  lastReadMessageIndex?: number;

  @Metadata({ data: "form, name=LastReadTimestamp;" })
  lastReadTimestamp?: Date;

  @Metadata({ data: "form, name=NotificationLevel;" })
  notificationLevel?: shared.UserConversationEnumNotificationLevelEnum;
}


export class UpdateUserConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateUserConversationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateUserConversationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateUserConversationUpdateUserConversationRequest;

  @Metadata()
  security: UpdateUserConversationSecurity;
}


export class UpdateUserConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1UserUserConversation?: shared.ConversationsV1UserUserConversation;
}
