import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateConversationScopedWebhookServerList = [
	"https://conversations.twilio.com",
] as const;


export class CreateConversationScopedWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class CreateConversationScopedWebhookCreateConversationScopedWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Configuration.Filters;" })
  configurationFilters?: string[];

  @SpeakeasyMetadata({ data: "form, name=Configuration.FlowSid;" })
  configurationFlowSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Configuration.Method;" })
  configurationMethod?: shared.ConversationScopedWebhookEnumMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Configuration.ReplayAfter;" })
  configurationReplayAfter?: number;

  @SpeakeasyMetadata({ data: "form, name=Configuration.Triggers;" })
  configurationTriggers?: string[];

  @SpeakeasyMetadata({ data: "form, name=Configuration.Url;" })
  configurationUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Target;" })
  target: shared.ConversationScopedWebhookEnumTargetEnum;
}


export class CreateConversationScopedWebhookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateConversationScopedWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateConversationScopedWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateConversationScopedWebhookCreateConversationScopedWebhookRequest;

  @SpeakeasyMetadata()
  security: CreateConversationScopedWebhookSecurity;
}


export class CreateConversationScopedWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ConversationConversationScopedWebhook?: shared.ConversationsV1ConversationConversationScopedWebhook;
}
