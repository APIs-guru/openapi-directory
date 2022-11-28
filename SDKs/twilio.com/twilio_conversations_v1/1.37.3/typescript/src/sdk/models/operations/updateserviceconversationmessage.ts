import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateServiceConversationMessageServerList = [
	"https://conversations.twilio.com",
] as const;


export class UpdateServiceConversationMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateServiceConversationMessageHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum;
}


export class UpdateServiceConversationMessageUpdateServiceConversationMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "form, name=Author;" })
  author?: string;

  @SpeakeasyMetadata({ data: "form, name=Body;" })
  body?: string;

  @SpeakeasyMetadata({ data: "form, name=DateCreated;" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "form, name=DateUpdated;" })
  dateUpdated?: Date;
}


export class UpdateServiceConversationMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceConversationMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateServiceConversationMessagePathParams;

  @SpeakeasyMetadata()
  headers: UpdateServiceConversationMessageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceConversationMessageUpdateServiceConversationMessageRequest;

  @SpeakeasyMetadata()
  security: UpdateServiceConversationMessageSecurity;
}


export class UpdateServiceConversationMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceConversationServiceConversationMessage?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessage;
}
