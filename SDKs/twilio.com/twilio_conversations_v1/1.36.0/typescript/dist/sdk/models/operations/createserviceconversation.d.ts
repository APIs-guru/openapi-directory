import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESERVICECONVERSATION_SERVERS: string[];
export declare class CreateServiceConversationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class CreateServiceConversationHeaders extends SpeakeasyBase {
    xTwilioWebhookEnabled?: shared.ServiceConversationEnumWebhookEnabledTypeEnum;
}
export declare class CreateServiceConversationCreateServiceConversationRequest extends SpeakeasyBase {
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
export declare class CreateServiceConversationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateServiceConversationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateServiceConversationPathParams;
    headers: CreateServiceConversationHeaders;
    request?: CreateServiceConversationCreateServiceConversationRequest;
    security: CreateServiceConversationSecurity;
}
export declare class CreateServiceConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConversation?: shared.ConversationsV1ServiceServiceConversation;
}
