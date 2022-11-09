import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCONVERSATIONMESSAGERECEIPT_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListConversationMessageReceiptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" })
  messageSid: string;
}


export class ListConversationMessageReceiptQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConversationMessageReceiptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConversationMessageReceiptRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListConversationMessageReceiptPathParams;

  @Metadata()
  queryParams: ListConversationMessageReceiptQueryParams;

  @Metadata()
  security: ListConversationMessageReceiptSecurity;
}


export class ListConversationMessageReceiptListConversationMessageReceiptResponseMeta extends SpeakeasyBase {
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


export class ListConversationMessageReceiptListConversationMessageReceiptResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=delivery_receipts", elemType: shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt })
  deliveryReceipts?: shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListConversationMessageReceiptListConversationMessageReceiptResponseMeta;
}


export class ListConversationMessageReceiptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listConversationMessageReceiptResponse?: ListConversationMessageReceiptListConversationMessageReceiptResponse;

  @Metadata()
  statusCode: number;
}
