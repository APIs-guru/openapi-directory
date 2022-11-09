import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESERVICEUSERCONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateServiceUserConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class UpdateServiceUserConversationUpdateServiceUserConversationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=LastReadMessageIndex;" })
  lastReadMessageIndex?: number;

  @Metadata({ data: "form, name=LastReadTimestamp;" })
  lastReadTimestamp?: Date;

  @Metadata({ data: "form, name=NotificationLevel;" })
  notificationLevel?: shared.ServiceUserConversationEnumNotificationLevelEnum;
}


export class UpdateServiceUserConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceUserConversationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateServiceUserConversationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceUserConversationUpdateServiceUserConversationRequest;

  @Metadata()
  security: UpdateServiceUserConversationSecurity;
}


export class UpdateServiceUserConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ServiceServiceUserServiceUserConversation?: shared.ConversationsV1ServiceServiceUserServiceUserConversation;
}
