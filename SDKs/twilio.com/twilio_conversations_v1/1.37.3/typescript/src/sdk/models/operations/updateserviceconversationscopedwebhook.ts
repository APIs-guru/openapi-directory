import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateServiceConversationScopedWebhookServerList = [
	"https://conversations.twilio.com",
] as const;


export class UpdateServiceConversationScopedWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Configuration.Filters;" })
  configurationFilters?: string[];

  @SpeakeasyMetadata({ data: "form, name=Configuration.FlowSid;" })
  configurationFlowSid?: string;

  @SpeakeasyMetadata({ data: "form, name=Configuration.Method;" })
  configurationMethod?: shared.ServiceConversationScopedWebhookEnumMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=Configuration.Triggers;" })
  configurationTriggers?: string[];

  @SpeakeasyMetadata({ data: "form, name=Configuration.Url;" })
  configurationUrl?: string;
}


export class UpdateServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceConversationScopedWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateServiceConversationScopedWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceConversationScopedWebhookUpdateServiceConversationScopedWebhookRequest;

  @SpeakeasyMetadata()
  security: UpdateServiceConversationScopedWebhookSecurity;
}


export class UpdateServiceConversationScopedWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceConversationServiceConversationScopedWebhook?: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook;
}
