import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETESERVICECONVERSATION_SERVERS: string[];
export declare class DeleteServiceConversationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    sid: string;
}
export declare class DeleteServiceConversationHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ServiceConversationEnumWebhookEnabledTypeEnum;
}
export declare class DeleteServiceConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteServiceConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteServiceConversationPathParams;
    headers: DeleteServiceConversationHeaders;
    security: DeleteServiceConversationSecurity;
}
export declare class DeleteServiceConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
