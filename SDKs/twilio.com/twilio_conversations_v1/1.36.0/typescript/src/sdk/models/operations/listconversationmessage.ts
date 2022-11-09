import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCONVERSATIONMESSAGE_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListConversationMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class ListConversationMessageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.ConversationMessageEnumOrderTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConversationMessageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConversationMessageRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListConversationMessagePathParams;

  @Metadata()
  queryParams: ListConversationMessageQueryParams;

  @Metadata()
  security: ListConversationMessageSecurity;
}


export class ListConversationMessageListConversationMessageResponseMeta extends SpeakeasyBase {
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


export class ListConversationMessageListConversationMessageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.ConversationsV1ConversationConversationMessage })
  messages?: shared.ConversationsV1ConversationConversationMessage[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListConversationMessageListConversationMessageResponseMeta;
}


export class ListConversationMessageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listConversationMessageResponse?: ListConversationMessageListConversationMessageResponse;

  @Metadata()
  statusCode: number;
}
