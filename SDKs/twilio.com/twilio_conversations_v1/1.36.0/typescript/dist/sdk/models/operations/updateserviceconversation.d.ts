import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATESERVICECONVERSATION_SERVERS: string[];
export declare class UpdateServiceConversationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
    sid: string;
}
export declare class UpdateServiceConversationHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ServiceConversationEnumWebhookEnabledTypeEnum;
}
export declare class UpdateServiceConversationUpdateServiceConversationRequest extends SpeakeasyBase {
    attributes?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    messagingServiceSid?: string;
    state?: shared.ServiceConversationEnumStateEnum;
    timersClosed?: string;
    timersInactive?: string;
    uniqueName?: string;
}
export declare class UpdateServiceConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServiceConversationPathParams;
    headers: UpdateServiceConversationHeaders;
    request?: UpdateServiceConversationUpdateServiceConversationRequest;
    security: UpdateServiceConversationSecurity;
}
export declare class UpdateServiceConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConversation?: shared.ConversationsV1ServiceServiceConversation;
}
