import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSERVICECONVERSATIONMESSAGE_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListServiceConversationMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;
}


export class ListServiceConversationMessageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.ServiceConversationMessageEnumOrderTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceConversationMessageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceConversationMessageRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListServiceConversationMessagePathParams;

  @Metadata()
  queryParams: ListServiceConversationMessageQueryParams;

  @Metadata()
  security: ListServiceConversationMessageSecurity;
}


export class ListServiceConversationMessageListServiceConversationMessageResponseMeta extends SpeakeasyBase {
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


export class ListServiceConversationMessageListServiceConversationMessageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.ConversationsV1ServiceServiceConversationServiceConversationMessage })
  messages?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessage[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListServiceConversationMessageListServiceConversationMessageResponseMeta;
}


export class ListServiceConversationMessageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listServiceConversationMessageResponse?: ListServiceConversationMessageListServiceConversationMessageResponse;

  @Metadata()
  statusCode: number;
}
