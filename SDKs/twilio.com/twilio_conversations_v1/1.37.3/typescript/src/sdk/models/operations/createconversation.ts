import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateConversationServerList = [
	"https://conversations.twilio.com",
] as const;


export class CreateConversationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ConversationEnumWebhookEnabledTypeEnum;
}


export class CreateConversationCreateConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "form, name=DateCreated;" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "form, name=DateUpdated;" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid?: string;

  @SpeakeasyMetadata({ data: "form, name=State;" })
  state?: shared.ConversationEnumStateEnum;

  @SpeakeasyMetadata({ data: "form, name=Timers.Closed;" })
  timersClosed?: string;

  @SpeakeasyMetadata({ data: "form, name=Timers.Inactive;" })
  timersInactive?: string;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  headers: CreateConversationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateConversationCreateConversationRequest;

  @SpeakeasyMetadata()
  security: CreateConversationSecurity;
}


export class CreateConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1Conversation?: shared.ConversationsV1Conversation;
}
