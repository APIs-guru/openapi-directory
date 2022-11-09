import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateConversationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ConversationEnumWebhookEnabledTypeEnum;
}


export class UpdateConversationUpdateConversationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @Metadata({ data: "form, name=DateCreated;" })
  dateCreated?: Date;

  @Metadata({ data: "form, name=DateUpdated;" })
  dateUpdated?: Date;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid?: string;

  @Metadata({ data: "form, name=State;" })
  state?: shared.ConversationEnumStateEnum;

  @Metadata({ data: "form, name=Timers.Closed;" })
  timersClosed?: string;

  @Metadata({ data: "form, name=Timers.Inactive;" })
  timersInactive?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConversationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateConversationPathParams;

  @Metadata()
  headers: UpdateConversationHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConversationUpdateConversationRequest;

  @Metadata()
  security: UpdateConversationSecurity;
}


export class UpdateConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1Conversation?: shared.ConversationsV1Conversation;
}
