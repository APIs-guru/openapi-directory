import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListServiceConversationScopedWebhookServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListServiceConversationScopedWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class ListServiceConversationScopedWebhookQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=webhooks", elemType: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook })
  webhooks?: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook[];
}


export class ListServiceConversationScopedWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListServiceConversationScopedWebhookPathParams;

  @SpeakeasyMetadata()
  queryParams: ListServiceConversationScopedWebhookQueryParams;

  @SpeakeasyMetadata()
  security: ListServiceConversationScopedWebhookSecurity;
}


export class ListServiceConversationScopedWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listServiceConversationScopedWebhookResponse?: ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
