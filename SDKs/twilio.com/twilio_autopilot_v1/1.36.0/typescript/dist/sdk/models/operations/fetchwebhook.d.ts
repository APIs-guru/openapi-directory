import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHWEBHOOK_SERVERS: string[];
export declare class FetchWebhookPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class FetchWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchWebhookPathParams;
    security: FetchWebhookSecurity;
}
export declare class FetchWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantWebhook?: shared.AutopilotV1AssistantWebhook;
}
