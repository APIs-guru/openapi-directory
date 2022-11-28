import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListConversationMessageServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListConversationMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class ListConversationMessageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.ConversationMessageEnumOrderTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConversationMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConversationMessageListConversationMessageResponseMeta extends SpeakeasyBase {
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


export class ListConversationMessageListConversationMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.ConversationsV1ConversationConversationMessage })
  messages?: shared.ConversationsV1ConversationConversationMessage[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListConversationMessageListConversationMessageResponseMeta;
}


export class ListConversationMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListConversationMessagePathParams;

  @SpeakeasyMetadata()
  queryParams: ListConversationMessageQueryParams;

  @SpeakeasyMetadata()
  security: ListConversationMessageSecurity;
}


export class ListConversationMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listConversationMessageResponse?: ListConversationMessageListConversationMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
