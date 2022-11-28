import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteConversationParticipantServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteConversationParticipantPathParams extends SpeakeasyBase {
    conversationSid: string;
    sid: string;
}
export declare class DeleteConversationParticipantHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ConversationParticipantEnumWebhookEnabledTypeEnum;
}
export declare class DeleteConversationParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteConversationParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteConversationParticipantPathParams;
    headers: DeleteConversationParticipantHeaders;
    security: DeleteConversationParticipantSecurity;
}
export declare class DeleteConversationParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
