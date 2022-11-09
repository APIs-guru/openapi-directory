import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESERVICECONVERSATIONPARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
];



export class CreateServiceConversationParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class CreateServiceConversationParticipantHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum;
}


export class CreateServiceConversationParticipantCreateServiceConversationParticipantRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @Metadata({ data: "form, name=DateCreated;" })
  dateCreated?: Date;

  @Metadata({ data: "form, name=DateUpdated;" })
  dateUpdated?: Date;

  @Metadata({ data: "form, name=Identity;" })
  identity?: string;

  @Metadata({ data: "form, name=MessagingBinding.Address;" })
  messagingBindingAddress?: string;

  @Metadata({ data: "form, name=MessagingBinding.ProjectedAddress;" })
  messagingBindingProjectedAddress?: string;

  @Metadata({ data: "form, name=MessagingBinding.ProxyAddress;" })
  messagingBindingProxyAddress?: string;

  @Metadata({ data: "form, name=RoleSid;" })
  roleSid?: string;
}


export class CreateServiceConversationParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceConversationParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateServiceConversationParticipantPathParams;

  @Metadata()
  headers: CreateServiceConversationParticipantHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceConversationParticipantCreateServiceConversationParticipantRequest;

  @Metadata()
  security: CreateServiceConversationParticipantSecurity;
}


export class CreateServiceConversationParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ServiceServiceConversationServiceConversationParticipant?: shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant;
}
