import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCONVERSATIONSCOPEDWEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListConversationScopedWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class ListConversationScopedWebhookQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConversationScopedWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConversationScopedWebhookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListConversationScopedWebhookPathParams;

  @Metadata()
  queryParams: ListConversationScopedWebhookQueryParams;

  @Metadata()
  security: ListConversationScopedWebhookSecurity;
}


export class ListConversationScopedWebhookListConversationScopedWebhookResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListConversationScopedWebhookListConversationScopedWebhookResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListConversationScopedWebhookListConversationScopedWebhookResponseMeta;

  @Metadata({ data: "json, name=webhooks", elemType: shared.ConversationsV1ConversationConversationScopedWebhook })
  webhooks?: shared.ConversationsV1ConversationConversationScopedWebhook[];
}


export class ListConversationScopedWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listConversationScopedWebhookResponse?: ListConversationScopedWebhookListConversationScopedWebhookResponse;

  @Metadata()
  statusCode: number;
}
