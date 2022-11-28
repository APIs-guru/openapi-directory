import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateConversationParticipantServerList = [
	"https://conversations.twilio.com",
] as const;


export class CreateConversationParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class CreateConversationParticipantHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ConversationParticipantEnumWebhookEnabledTypeEnum;
}


export class CreateConversationParticipantCreateConversationParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "form, name=DateCreated;" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "form, name=DateUpdated;" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "form, name=Identity;" })
  identity?: string;

  @SpeakeasyMetadata({ data: "form, name=MessagingBinding.Address;" })
  messagingBindingAddress?: string;

  @SpeakeasyMetadata({ data: "form, name=MessagingBinding.ProjectedAddress;" })
  messagingBindingProjectedAddress?: string;

  @SpeakeasyMetadata({ data: "form, name=MessagingBinding.ProxyAddress;" })
  messagingBindingProxyAddress?: string;

  @SpeakeasyMetadata({ data: "form, name=RoleSid;" })
  roleSid?: string;
}


export class CreateConversationParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateConversationParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateConversationParticipantPathParams;

  @SpeakeasyMetadata()
  headers: CreateConversationParticipantHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateConversationParticipantCreateConversationParticipantRequest;

  @SpeakeasyMetadata()
  security: CreateConversationParticipantSecurity;
}


export class CreateConversationParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ConversationConversationParticipant?: shared.ConversationsV1ConversationConversationParticipant;
}
