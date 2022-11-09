import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESERVICECONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
];



export class CreateServiceConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;
}


export class CreateServiceConversationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ServiceConversationEnumWebhookEnabledTypeEnum;
}


export class CreateServiceConversationCreateServiceConversationRequest extends SpeakeasyBase {
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
  state?: shared.ServiceConversationEnumStateEnum;

  @Metadata({ data: "form, name=Timers.Closed;" })
  timersClosed?: string;

  @Metadata({ data: "form, name=Timers.Inactive;" })
  timersInactive?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateServiceConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceConversationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateServiceConversationPathParams;

  @Metadata()
  headers: CreateServiceConversationHeaders;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceConversationCreateServiceConversationRequest;

  @Metadata()
  security: CreateServiceConversationSecurity;
}


export class CreateServiceConversationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ServiceServiceConversation?: shared.ConversationsV1ServiceServiceConversation;
}
