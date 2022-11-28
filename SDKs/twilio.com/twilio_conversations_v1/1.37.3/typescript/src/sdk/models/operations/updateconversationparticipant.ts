import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateConversationParticipantServerList = [
	"https://conversations.twilio.com",
] as const;


export class UpdateConversationParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateConversationParticipantHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ConversationParticipantEnumWebhookEnabledTypeEnum;
}


export class UpdateConversationParticipantUpdateConversationParticipantRequest extends SpeakeasyBase {
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


export class UpdateConversationParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConversationParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateConversationParticipantPathParams;

  @SpeakeasyMetadata()
  headers: UpdateConversationParticipantHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConversationParticipantUpdateConversationParticipantRequest;

  @SpeakeasyMetadata()
  security: UpdateConversationParticipantSecurity;
}


export class UpdateConversationParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ConversationConversationParticipant?: shared.ConversationsV1ConversationConversationParticipant;
}
