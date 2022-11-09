import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSERVICECONVERSATIONMESSAGERECEIPT_SERVERS = [
	"https://conversations.twilio.com",
];



export class ListServiceConversationMessageReceiptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" })
  messageSid: string;
}


export class ListServiceConversationMessageReceiptQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceConversationMessageReceiptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceConversationMessageReceiptRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListServiceConversationMessageReceiptPathParams;

  @Metadata()
  queryParams: ListServiceConversationMessageReceiptQueryParams;

  @Metadata()
  security: ListServiceConversationMessageReceiptSecurity;
}


export class ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta extends SpeakeasyBase {
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


export class ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=delivery_receipts", elemType: shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt })
  deliveryReceipts?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta;
}


export class ListServiceConversationMessageReceiptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listServiceConversationMessageReceiptResponse?: ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse;

  @Metadata()
  statusCode: number;
}
