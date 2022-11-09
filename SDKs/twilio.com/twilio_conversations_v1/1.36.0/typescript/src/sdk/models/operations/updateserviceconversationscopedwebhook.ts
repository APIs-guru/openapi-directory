import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESERVICECONVERSATIONSCOPEDWEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateServiceConversationScopedWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Configuration.Filters;" })
  configurationFilters?: string[];

  @Metadata({ data: "form, name=Configuration.FlowSid;" })
  configurationFlowSid?: string;

  @Metadata({ data: "form, name=Configuration.Method;" })
  configurationMethod?: shared.ServiceConversationScopedWebhookEnumMethodEnum;

  @Metadata({ data: "form, name=Configuration.Triggers;" })
  configurationTriggers?: string[];

  @Metadata({ data: "form, name=Configuration.Url;" })
  configurationUrl?: string;
}


export class UpdateServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateServiceConversationScopedWebhookPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest;

  @Metadata()
  security: UpdateServiceConversationScopedWebhookSecurity;
}


export class UpdateServiceConversationScopedWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ServiceServiceConversationServiceConversationScopedWebhook?: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
}
