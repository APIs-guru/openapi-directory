import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const DeleteUserConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteUserConversationPathParams extends SpeakeasyBase {
    conversationSid: string;
    userSid: string;
}
export declare class DeleteUserConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteUserConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteUserConversationPathParams;
    security: DeleteUserConversationSecurity;
}
export declare class DeleteUserConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
