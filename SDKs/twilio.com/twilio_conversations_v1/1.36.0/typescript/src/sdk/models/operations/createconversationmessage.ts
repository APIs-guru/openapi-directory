import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECONVERSATIONMESSAGE_SERVERS = [
	"https://conversations.twilio.com",
];



export class CreateConversationMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class CreateConversationMessageHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ConversationMessageEnumWebhookEnabledTypeEnum;
}


export class CreateConversationMessageCreateConversationMessageRequest extends SpeakeasyBase {
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

  @Metadata({ data: "form, name=MediaSid;" })
  mediaSid?: string;
}


export class CreateConversationMessageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateConversationMessageRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateConversationMessagePathParams;

  @Metadata()
  headers: CreateConversationMessageHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateConversationMessageCreateConversationMessageRequest;

  @Metadata()
  security: CreateConversationMessageSecurity;
}


export class CreateConversationMessageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ConversationConversationMessage?: shared.ConversationsV1ConversationConversationMessage;
}
