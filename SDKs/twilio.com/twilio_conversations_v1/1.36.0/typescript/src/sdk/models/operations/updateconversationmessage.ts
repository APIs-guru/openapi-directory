import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECONVERSATIONMESSAGE_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateConversationMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateConversationMessageHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ConversationMessageEnumWebhookEnabledTypeEnum;
}


export class UpdateConversationMessageUpdateConversationMessageRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @Metadata({ data: "form, name=Author;" })
  author?: string;

  @Metadata({ data: "form, name=Body;" })
  body?: string;

  @Metadata({ data: "form, name=DateCreated;" })
  dateCreated?: Date;

  @Metadata({ data: "form, name=DateUpdated;" })
  dateUpdated?: Date;
}


export class UpdateConversationMessageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConversationMessageRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateConversationMessagePathParams;

  @Metadata()
  headers: UpdateConversationMessageHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConversationMessageUpdateConversationMessageRequest;

  @Metadata()
  security: UpdateConversationMessageSecurity;
}


export class UpdateConversationMessageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ConversationConversationMessage?: shared.ConversationsV1ConversationConversationMessage;
}
