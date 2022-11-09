import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSERVICECONVERSATIONSCOPEDWEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListServiceConversationScopedWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class ListServiceConversationScopedWebhookQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceConversationScopedWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceConversationScopedWebhookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListServiceConversationScopedWebhookPathParams;

  @Metadata()
  queryParams: ListServiceConversationScopedWebhookQueryParams;

  @Metadata()
  security: ListServiceConversationScopedWebhookSecurity;
}


export class ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta extends SpeakeasyBase {
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


export class ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponseMeta;

  @Metadata({ data: "json, name=webhooks", elemType: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook })
  webhooks?: shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook[];
}


export class ListServiceConversationScopedWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listServiceConversationScopedWebhookResponse?: ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse;

  @Metadata()
  statusCode: number;
}
