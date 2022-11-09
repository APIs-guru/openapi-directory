import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESERVICENOTIFICATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateServiceNotificationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class UpdateServiceNotificationUpdateServiceNotificationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AddedToConversation.Enabled;" })
  addedToConversationEnabled?: boolean;

  @Metadata({ data: "form, name=AddedToConversation.Sound;" })
  addedToConversationSound?: string;

  @Metadata({ data: "form, name=AddedToConversation.Template;" })
  addedToConversationTemplate?: string;

  @Metadata({ data: "form, name=LogEnabled;" })
  logEnabled?: boolean;

  @Metadata({ data: "form, name=NewMessage.BadgeCountEnabled;" })
  newMessageBadgeCountEnabled?: boolean;

  @Metadata({ data: "form, name=NewMessage.Enabled;" })
  newMessageEnabled?: boolean;

  @Metadata({ data: "form, name=NewMessage.Sound;" })
  newMessageSound?: string;

  @Metadata({ data: "form, name=NewMessage.Template;" })
  newMessageTemplate?: string;

  @Metadata({ data: "form, name=NewMessage.WithMedia.Enabled;" })
  newMessageWithMediaEnabled?: boolean;

  @Metadata({ data: "form, name=NewMessage.WithMedia.Template;" })
  newMessageWithMediaTemplate?: string;

  @Metadata({ data: "form, name=RemovedFromConversation.Enabled;" })
  removedFromConversationEnabled?: boolean;

  @Metadata({ data: "form, name=RemovedFromConversation.Sound;" })
  removedFromConversationSound?: string;

  @Metadata({ data: "form, name=RemovedFromConversation.Template;" })
  removedFromConversationTemplate?: string;
}


export class UpdateServiceNotificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceNotificationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateServiceNotificationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceNotificationUpdateServiceNotificationRequest;

  @Metadata()
  security: UpdateServiceNotificationSecurity;
}


export class UpdateServiceNotificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ServiceServiceConfigurationServiceNotification?: shared.ConversationsV1ServiceServiceConfigurationServiceNotification;
}
