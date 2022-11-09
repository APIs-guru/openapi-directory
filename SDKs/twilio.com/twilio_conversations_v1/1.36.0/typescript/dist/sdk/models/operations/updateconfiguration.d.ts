import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATECONFIGURATION_SERVERS: string[];
export declare class UpdateConfigurationUpdateConfigurationRequest extends SpeakeasyBase {
    defaultChatServiceSid?: string;
    defaultClosedTimer?: string;
    defaultInactiveTimer?: string;
    defaultMessagingServiceSid?: string;
}
export declare class UpdateConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: UpdateConfigurationUpdateConfigurationRequest;
    security: UpdateConfigurationSecurity;
}
export declare class UpdateConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1Configuration?: shared.ConversationsV1Configuration;
}
