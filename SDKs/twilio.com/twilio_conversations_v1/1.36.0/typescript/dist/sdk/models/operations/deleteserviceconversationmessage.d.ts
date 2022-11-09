import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESERVICECONVERSATIONMESSAGE_SERVERS: string[];
export declare class DeleteServiceConversationMessagePathParams extends SpeakeasyBase {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
}
export declare class DeleteServiceConversationMessageHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum;
}
export declare class DeleteServiceConversationMessageSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteServiceConversationMessageRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteServiceConversationMessagePathParams;
    headers: DeleteServiceConversationMessageHeaders;
    security: DeleteServiceConversationMessageSecurity;
}
export declare class DeleteServiceConversationMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
