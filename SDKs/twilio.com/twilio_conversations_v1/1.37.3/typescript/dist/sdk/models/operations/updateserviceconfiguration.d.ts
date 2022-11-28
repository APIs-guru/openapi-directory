import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateServiceConfigurationServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateServiceConfigurationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class UpdateServiceConfigurationUpdateServiceConfigurationRequest extends SpeakeasyBase {
    defaultChatServiceRoleSid?: string;
    defaultConversationCreatorRoleSid?: string;
    defaultConversationRoleSid?: string;
    reachabilityEnabled?: boolean;
}
export declare class UpdateServiceConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServiceConfigurationPathParams;
    request?: UpdateServiceConfigurationUpdateServiceConfigurationRequest;
    security: UpdateServiceConfigurationSecurity;
}
export declare class UpdateServiceConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConfiguration?: shared.ConversationsV1ServiceServiceConfiguration;
}
