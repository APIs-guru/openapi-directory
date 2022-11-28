import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateServiceConversationMessageServerList = [
	"https://conversations.twilio.com",
] as const;


export class CreateServiceConversationMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class CreateServiceConversationMessageHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum;
}


export class CreateServiceConversationMessageCreateServiceConversationMessageRequest extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "form, name=MediaSid;" })
  mediaSid?: string;
}


export class CreateServiceConversationMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceConversationMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateServiceConversationMessagePathParams;

  @SpeakeasyMetadata()
  headers: CreateServiceConversationMessageHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceConversationMessageCreateServiceConversationMessageRequest;

  @SpeakeasyMetadata()
  security: CreateServiceConversationMessageSecurity;
}


export class CreateServiceConversationMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceConversationServiceConversationMessage?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessage;
}
