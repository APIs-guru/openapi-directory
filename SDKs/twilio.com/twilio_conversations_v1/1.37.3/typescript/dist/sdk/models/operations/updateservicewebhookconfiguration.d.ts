import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateServiceWebhookConfigurationServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateServiceWebhookConfigurationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest extends SpeakeasyBase {
    filters?: string[];
    method?: string;
    postWebhookUrl?: string;
    preWebhookUrl?: string;
}
export declare class UpdateServiceWebhookConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateServiceWebhookConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateServiceWebhookConfigurationPathParams;
    request?: UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest;
    security: UpdateServiceWebhookConfigurationSecurity;
}
export declare class UpdateServiceWebhookConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration?: shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
}
