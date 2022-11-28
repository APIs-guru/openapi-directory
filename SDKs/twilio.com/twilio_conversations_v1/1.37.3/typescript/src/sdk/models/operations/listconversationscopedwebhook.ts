import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListConversationScopedWebhookServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListConversationScopedWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class ListConversationScopedWebhookQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConversationScopedWebhookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConversationScopedWebhookListConversationScopedWebhookResponseMeta extends SpeakeasyBase {
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


export class ListConversationScopedWebhookListConversationScopedWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListConversationScopedWebhookListConversationScopedWebhookResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=webhooks", elemType: shared.ConversationsV1ConversationConversationScopedWebhook })
  webhooks?: shared.ConversationsV1ConversationConversationScopedWebhook[];
}


export class ListConversationScopedWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListConversationScopedWebhookPathParams;

  @SpeakeasyMetadata()
  queryParams: ListConversationScopedWebhookQueryParams;

  @SpeakeasyMetadata()
  security: ListConversationScopedWebhookSecurity;
}


export class ListConversationScopedWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listConversationScopedWebhookResponse?: ListConversationScopedWebhookListConversationScopedWebhookResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
