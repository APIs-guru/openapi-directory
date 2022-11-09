import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSERVICEWEBHOOKCONFIGURATION_SERVERS: string[];
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
