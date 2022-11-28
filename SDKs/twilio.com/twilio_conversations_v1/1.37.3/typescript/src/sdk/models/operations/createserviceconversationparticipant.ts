import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateServiceConversationParticipantServerList = [
	"https://conversations.twilio.com",
] as const;


export class CreateServiceConversationParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class CreateServiceConversationParticipantHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum;
}


export class CreateServiceConversationParticipantCreateServiceConversationParticipantRequest extends SpeakeasyBase {
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


export class CreateServiceConversationParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceConversationParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateServiceConversationParticipantPathParams;

  @SpeakeasyMetadata()
  headers: CreateServiceConversationParticipantHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceConversationParticipantCreateServiceConversationParticipantRequest;

  @SpeakeasyMetadata()
  security: CreateServiceConversationParticipantSecurity;
}


export class CreateServiceConversationParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceConversationServiceConversationParticipant?: shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant;
}
