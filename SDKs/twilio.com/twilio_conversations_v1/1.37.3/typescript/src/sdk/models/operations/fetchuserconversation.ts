import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchUserConversationServerList = [
	"https://conversations.twilio.com",
] as const;


export class FetchUserConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class FetchUserConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchUserConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchUserConversationPathParams;

  @SpeakeasyMetadata()
  security: FetchUserConversationSecurity;
}


export class FetchUserConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  conversationsV1UserUserConversation?: shared.ConversationsV1UserUserConversation;
}
