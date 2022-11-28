import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateConfigurationWebhookServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateConfigurationWebhookUpdateConfigurationWebhookRequest extends SpeakeasyBase {
    filters?: string[];
    method?: string;
    postWebhookUrl?: string;
    preWebhookUrl?: string;
    target?: shared.ConfigurationWebhookEnumTargetEnum;
}
export declare class UpdateConfigurationWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateConfigurationWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: UpdateConfigurationWebhookUpdateConfigurationWebhookRequest;
    security: UpdateConfigurationWebhookSecurity;
}
export declare class UpdateConfigurationWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConfigurationConfigurationWebhook?: shared.ConversationsV1ConfigurationConfigurationWebhook;
}
