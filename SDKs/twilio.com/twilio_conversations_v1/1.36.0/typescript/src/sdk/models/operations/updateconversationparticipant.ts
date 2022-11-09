import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECONVERSATIONPARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateConversationParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateConversationParticipantHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ConversationParticipantEnumWebhookEnabledTypeEnum;
}


export class UpdateConversationParticipantUpdateConversationParticipantRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @Metadata({ data: "form, name=DateCreated;" })
  dateCreated?: Date;

  @Metadata({ data: "form, name=DateUpdated;" })
  dateUpdated?: Date;

  @Metadata({ data: "form, name=Identity;" })
  identity?: string;

  @Metadata({ data: "form, name=LastReadMessageIndex;" })
  lastReadMessageIndex?: number;

  @Metadata({ data: "form, name=LastReadTimestamp;" })
  lastReadTimestamp?: string;

  @Metadata({ data: "form, name=MessagingBinding.ProjectedAddress;" })
  messagingBindingProjectedAddress?: string;

  @Metadata({ data: "form, name=MessagingBinding.ProxyAddress;" })
  messagingBindingProxyAddress?: string;

  @Metadata({ data: "form, name=RoleSid;" })
  roleSid?: string;
}


export class UpdateConversationParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConversationParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateConversationParticipantPathParams;

  @Metadata()
  headers: UpdateConversationParticipantHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConversationParticipantUpdateConversationParticipantRequest;

  @Metadata()
  security: UpdateConversationParticipantSecurity;
}


export class UpdateConversationParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ConversationConversationParticipant?: shared.ConversationsV1ConversationConversationParticipant;
}
