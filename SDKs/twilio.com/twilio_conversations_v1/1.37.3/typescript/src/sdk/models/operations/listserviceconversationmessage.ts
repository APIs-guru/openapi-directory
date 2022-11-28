import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListServiceConversationMessageServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListServiceConversationMessagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class ListServiceConversationMessageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.ServiceConversationMessageEnumOrderTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceConversationMessageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceConversationMessageListServiceConversationMessageResponseMeta extends SpeakeasyBase {
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


export class ListServiceConversationMessageListServiceConversationMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.ConversationsV1ServiceServiceConversationServiceConversationMessage })
  messages?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessage[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListServiceConversationMessageListServiceConversationMessageResponseMeta;
}


export class ListServiceConversationMessageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListServiceConversationMessagePathParams;

  @SpeakeasyMetadata()
  queryParams: ListServiceConversationMessageQueryParams;

  @SpeakeasyMetadata()
  security: ListServiceConversationMessageSecurity;
}


export class ListServiceConversationMessageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listServiceConversationMessageResponse?: ListServiceConversationMessageListServiceConversationMessageResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
