import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateServiceConversationScopedWebhookServerList = [
	"https://conversations.twilio.com",
] as const;


export class CreateServiceConversationScopedWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Configuration.Filters;" })
  configurationFilters?: string[];

  @SpeakeasyMetadata({ data: "form, name=Configuration.FlowSid;" })
  configurationFlowSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Configuration.Method;" })
  configurationMethod?: shared.ServiceConversationScopedWebhookEnumMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Configuration.ReplayAfter;" })
  configurationReplayAfter?: number;

  @SpeakeasyMetadata({ data: "form, name=Configuration.Triggers;" })
  configurationTriggers?: string[];

  @SpeakeasyMetadata({ data: "form, name=Configuration.Url;" })
  configurationUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Target;" })
  target: shared.ServiceConversationScopedWebhookEnumTargetEnum;
}


export class CreateServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateServiceConversationScopedWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest;

  @SpeakeasyMetadata()
  security: CreateServiceConversationScopedWebhookSecurity;
}


export class CreateServiceConversationScopedWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceConversationServiceConversationScopedWebhook?: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
}
