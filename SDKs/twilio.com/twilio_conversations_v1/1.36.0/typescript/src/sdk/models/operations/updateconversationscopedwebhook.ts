import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATECONVERSATIONSCOPEDWEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
];



export class UpdateConversationScopedWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Configuration.Filters;" })
  configurationFilters?: string[];

  @Metadata({ data: "form, name=Configuration.FlowSid;" })
  configurationFlowSid?: string;

  @Metadata({ data: "form, name=Configuration.Method;" })
  configurationMethod?: shared.ConversationScopedWebhookEnumMethodEnum;

  @Metadata({ data: "form, name=Configuration.Triggers;" })
  configurationTriggers?: string[];

  @Metadata({ data: "form, name=Configuration.Url;" })
  configurationUrl?: string;
}


export class UpdateConversationScopedWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateConversationScopedWebhookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateConversationScopedWebhookPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest;

  @Metadata()
  security: UpdateConversationScopedWebhookSecurity;
}


export class UpdateConversationScopedWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ConversationConversationScopedWebhook?: shared.ConversationsV1ConversationConversationScopedWebhook;
}
