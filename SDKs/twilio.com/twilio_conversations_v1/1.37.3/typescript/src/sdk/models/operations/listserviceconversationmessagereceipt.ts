import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListServiceConversationMessageReceiptServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListServiceConversationMessageReceiptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" })
  messageSid: string;
}


export class ListServiceConversationMessageReceiptQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListServiceConversationMessageReceiptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta extends SpeakeasyBase {
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


export class ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delivery_receipts", elemType: shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt })
  deliveryReceipts?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta;
}


export class ListServiceConversationMessageReceiptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListServiceConversationMessageReceiptPathParams;

  @SpeakeasyMetadata()
  queryParams: ListServiceConversationMessageReceiptQueryParams;

  @SpeakeasyMetadata()
  security: ListServiceConversationMessageReceiptSecurity;
}


export class ListServiceConversationMessageReceiptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listServiceConversationMessageReceiptResponse?: ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
