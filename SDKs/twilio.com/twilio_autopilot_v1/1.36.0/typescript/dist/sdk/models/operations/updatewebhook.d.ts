import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const UPDATEWEBHOOK_SERVERS: string[];
export declare class UpdateWebhookPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class UpdateWebhookUpdateWebhookRequest extends SpeakeasyBase {
    events?: string;
    uniqueName?: string;
    webhookMethod?: string;
    webhookUrl?: string;
}
export declare class UpdateWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: UpdateWebhookPathParams;
    request?: UpdateWebhookUpdateWebhookRequest;
    security: UpdateWebhookSecurity;
}
export declare class UpdateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantWebhook?: shared.AutopilotV1AssistantWebhook;
}
