import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEWEBHOOK_SERVERS: string[];
export declare class CreateWebhookPathParams extends SpeakeasyBase {
    serviceSid: string;
}
export declare class CreateWebhookCreateWebhookRequest extends SpeakeasyBase {
    eventTypes: string[];
    friendlyName: string;
    status?: shared.WebhookEnumStatusEnum;
    version?: shared.WebhookEnumVersionEnum;
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
    verifyV2ServiceWebhook?: shared.VerifyV2ServiceWebhook;
}
