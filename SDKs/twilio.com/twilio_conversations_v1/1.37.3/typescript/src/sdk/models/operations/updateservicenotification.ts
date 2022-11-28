import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateServiceNotificationServerList = [
	"https://conversations.twilio.com",
] as const;


export class UpdateServiceNotificationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class UpdateServiceNotificationUpdateServiceNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AddedToConversation.Enabled;" })
  addedToConversationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=AddedToConversation.Sound;" })
  addedToConversationSound?: string;

  @SpeakeasyMetadata({ data: "form, name=AddedToConversation.Template;" })
  addedToConversationTemplate?: string;

  @SpeakeasyMetadata({ data: "form, name=LogEnabled;" })
  logEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=NewMessage.BadgeCountEnabled;" })
  newMessageBadgeCountEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=NewMessage.Enabled;" })
  newMessageEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=NewMessage.Sound;" })
  newMessageSound?: string;

  @SpeakeasyMetadata({ data: "form, name=NewMessage.Template;" })
  newMessageTemplate?: string;

  @SpeakeasyMetadata({ data: "form, name=NewMessage.WithMedia.Enabled;" })
  newMessageWithMediaEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=NewMessage.WithMedia.Template;" })
  newMessageWithMediaTemplate?: string;

  @SpeakeasyMetadata({ data: "form, name=RemovedFromConversation.Enabled;" })
  removedFromConversationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=RemovedFromConversation.Sound;" })
  removedFromConversationSound?: string;

  @SpeakeasyMetadata({ data: "form, name=RemovedFromConversation.Template;" })
  removedFromConversationTemplate?: string;
}


export class UpdateServiceNotificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateServiceNotificationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceNotificationUpdateServiceNotificationRequest;

  @SpeakeasyMetadata()
  security: UpdateServiceNotificationSecurity;
}


export class UpdateServiceNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceConfigurationServiceNotification?: shared.ConversationsV1ServiceServiceConfigurationServiceNotification;
}
