import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESERVICECONVERSATIONPARTICIPANT_SERVERS: string[];
export declare class DeleteServiceConversationParticipantPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
}
export declare class DeleteServiceConversationParticipantHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ServiceConversationParticipantEnumWebhookEnabledTypeEnum;
}
export declare class DeleteServiceConversationParticipantSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteServiceConversationParticipantRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteServiceConversationParticipantPathParams;
    headers: DeleteServiceConversationParticipantHeaders;
    security: DeleteServiceConversationParticipantSecurity;
}
export declare class DeleteServiceConversationParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
