import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESERVICECONVERSATIONSCOPEDWEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
];



export class CreateServiceConversationScopedWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Configuration.Filters;" })
  configurationFilters?: string[];

  @Metadata({ data: "form, name=Configuration.FlowSid;" })
  configurationFlowSid?: string;

  @Metadata({ data: "form, name=Configuration.Method;" })
  configurationMethod?: shared.ServiceConversationScopedWebhookEnumMethodEnum;

  @Metadata({ data: "form, name=Configuration.ReplayAfter;" })
  configurationReplayAfter?: number;

  @Metadata({ data: "form, name=Configuration.Triggers;" })
  configurationTriggers?: string[];

  @Metadata({ data: "form, name=Configuration.Url;" })
  configurationUrl?: string;

  @Metadata({ data: "form, name=Target;" })
  target: shared.ServiceConversationScopedWebhookEnumTargetEnum;
}


export class CreateServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateServiceConversationScopedWebhookPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest;

  @Metadata()
  security: CreateServiceConversationScopedWebhookSecurity;
}


export class CreateServiceConversationScopedWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ServiceServiceConversationServiceConversationScopedWebhook?: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
}
