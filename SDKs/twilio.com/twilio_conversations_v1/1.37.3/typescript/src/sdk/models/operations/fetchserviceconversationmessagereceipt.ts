import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchServiceConversationMessageReceiptServerList = [
	"https://conversations.twilio.com",
] as const;


export class FetchServiceConversationMessageReceiptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" })
  messageSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchServiceConversationMessageReceiptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchServiceConversationMessageReceiptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchServiceConversationMessageReceiptPathParams;

  @SpeakeasyMetadata()
  security: FetchServiceConversationMessageReceiptSecurity;
}


export class FetchServiceConversationMessageReceiptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt;
}
