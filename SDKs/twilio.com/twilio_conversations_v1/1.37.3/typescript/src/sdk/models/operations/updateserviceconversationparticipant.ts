import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateServiceConversationParticipantServerList = [
	"https://conversations.twilio.com",
] as const;


export class UpdateServiceConversationParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateServiceConversationParticipantHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum;
}


export class UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "form, name=DateCreated;" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "form, name=DateUpdated;" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "form, name=Identity;" })
  identity?: string;

  @SpeakeasyMetadata({ data: "form, name=LastReadMessageIndex;" })
  lastReadMessageIndex?: number;

  @SpeakeasyMetadata({ data: "form, name=LastReadTimestamp;" })
  lastReadTimestamp?: string;

  @SpeakeasyMetadata({ data: "form, name=MessagingBinding.ProjectedAddress;" })
  messagingBindingProjectedAddress?: string;

  @SpeakeasyMetadata({ data: "form, name=MessagingBinding.ProxyAddress;" })
  messagingBindingProxyAddress?: string;

  @SpeakeasyMetadata({ data: "form, name=RoleSid;" })
  roleSid?: string;
}


export class UpdateServiceConversationParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceConversationParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateServiceConversationParticipantPathParams;

  @SpeakeasyMetadata()
  headers: UpdateServiceConversationParticipantHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceConversationParticipantUpdateServiceConversationParticipantRequest;

  @SpeakeasyMetadata()
  security: UpdateServiceConversationParticipantSecurity;
}


export class UpdateServiceConversationParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceConversationServiceConversationParticipant?: shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant;
}
