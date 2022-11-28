import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteServiceConversationParticipantServerList = [
	"https://conversations.twilio.com",
] as const;


export class DeleteServiceConversationParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" })
  chatServiceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConversationSid" })
  conversationSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class DeleteServiceConversationParticipantHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Twilio-Webhook-Enabled" })
  xTwilioWebhookEnabled?: shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum;
}


export class DeleteServiceConversationParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class DeleteServiceConversationParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteServiceConversationParticipantPathParams;

  @SpeakeasyMetadata()
  headers: DeleteServiceConversationParticipantHeaders;

  @SpeakeasyMetadata()
  security: DeleteServiceConversationParticipantSecurity;
}


export class DeleteServiceConversationParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
