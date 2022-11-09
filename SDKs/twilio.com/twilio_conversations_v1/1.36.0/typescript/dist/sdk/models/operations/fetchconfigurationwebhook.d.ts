import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHCONFIGURATIONWEBHOOK_SERVERS: string[];
export declare class FetchConfigurationWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConfigurationWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    security: FetchConfigurationWebhookSecurity;
}
export declare class FetchConfigurationWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    conversationsV1ConfigurationConfigurationWebhook?: shared.ConversationsV1ConfigurationConfigurationWebhook;
}
