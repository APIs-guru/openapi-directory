import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchServiceWebhookConfigurationServerList: readonly ["https://conversations.twilio.com"];
export declare class FetchServiceWebhookConfigurationPathParams extends SpeakeasyBase {
    chatServiceSid: string;
}
export declare class FetchServiceWebhookConfigurationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchServiceWebhookConfigurationRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchServiceWebhookConfigurationPathParams;
    security: FetchServiceWebhookConfigurationSecurity;
}
export declare class FetchServiceWebhookConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration?: shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
}
