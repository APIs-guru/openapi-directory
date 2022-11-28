import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteServiceUserConversationServerList = [
	"https://conversations.twilio.com",
] as const;


export class DeleteServiceUserConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class DeleteServiceUserConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteServiceUserConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteServiceUserConversationPathParams;

  @SpeakeasyMetadata()
  security: DeleteServiceUserConversationSecurity;
}


export class DeleteServiceUserConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
