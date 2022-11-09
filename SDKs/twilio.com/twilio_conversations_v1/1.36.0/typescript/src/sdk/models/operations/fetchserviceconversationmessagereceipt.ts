import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHSERVICECONVERSATIONMESSAGERECEIPT_SERVERS = [
	"https://conversations.twilio.com",
];



export class FetchServiceConversationMessageReceiptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=MessageSid" })
  messageSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchServiceConversationMessageReceiptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchServiceConversationMessageReceiptRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchServiceConversationMessageReceiptPathParams;

  @Metadata()
  security: FetchServiceConversationMessageReceiptSecurity;
}


export class FetchServiceConversationMessageReceiptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt?: shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt;
}
