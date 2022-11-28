import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteServiceUserConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteServiceUserConversationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    userSid: string;
}
export declare class DeleteServiceUserConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteServiceUserConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteServiceUserConversationPathParams;
    security: DeleteServiceUserConversationSecurity;
}
export declare class DeleteServiceUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
