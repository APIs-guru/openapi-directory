import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateServiceConversationServerList = [
	"https://conversations.twilio.com",
] as const;


export class CreateServiceConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class CreateServiceConversationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ServiceConversationEnumWebhookEnabledTypeEnum;
}


export class CreateServiceConversationCreateServiceConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Attributes;" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "form, name=DateCreated;" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "form, name=DateUpdated;" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid?: string;

  @SpeakeasyMetadata({ data: "form, name=State;" })
  state?: shared.ServiceConversationEnumStateEnum;

  @SpeakeasyMetadata({ data: "form, name=Timers.Closed;" })
  timersClosed?: string;

  @SpeakeasyMetadata({ data: "form, name=Timers.Inactive;" })
  timersInactive?: string;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateServiceConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateServiceConversationPathParams;

  @SpeakeasyMetadata()
  headers: CreateServiceConversationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceConversationCreateServiceConversationRequest;

  @SpeakeasyMetadata()
  security: CreateServiceConversationSecurity;
}


export class CreateServiceConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceConversation?: shared.ConversationsV1ServiceServiceConversation;
}
