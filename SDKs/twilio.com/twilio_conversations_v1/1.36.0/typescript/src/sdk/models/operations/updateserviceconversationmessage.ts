import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESERVICECONVERSATIONMESSAGE_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateServiceConversationMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateServiceConversationMessageHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum;
}


export class UpdateServiceConversationMessageUpdateServiceConversationMessageRequest extends SpeakeasyBase {
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


export class UpdateServiceConversationMessageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceConversationMessageRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateServiceConversationMessagePathParams;

  @Metadata()
  headers: UpdateServiceConversationMessageHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceConversationMessageUpdateServiceConversationMessageRequest;

  @Metadata()
  security: UpdateServiceConversationMessageSecurity;
}


export class UpdateServiceConversationMessageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ServiceServiceConversationServiceConversationMessage?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessage;
}
