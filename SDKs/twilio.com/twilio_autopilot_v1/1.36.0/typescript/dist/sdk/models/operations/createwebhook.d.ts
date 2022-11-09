import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEWEBHOOK_SERVERS: string[];
export declare class CreateWebhookPathParams extends SpeakeasyBase {
    assistantSid: string;
}
export declare class CreateWebhookCreateWebhookRequest extends SpeakeasyBase {
    events: string;
    uniqueName: string;
    webhookMethod?: string;
    webhookUrl: string;
}
export declare class CreateWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateWebhookPathParams;
    request?: CreateWebhookCreateWebhookRequest;
    security: CreateWebhookSecurity;
}
export declare class CreateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    autopilotV1AssistantWebhook?: shared.AutopilotV1AssistantWebhook;
}
