import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const UpdateWebhookServerList: readonly ["https://verify.twilio.com"];
export declare class UpdateWebhookPathParams extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class UpdateWebhookUpdateWebhookRequest extends SpeakeasyBase {
    eventTypes?: string[];
    friendlyName?: string;
    status?: shared.WebhookEnumStatusEnum;
    version?: shared.WebhookEnumVersionEnum;
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
    verifyV2ServiceWebhook?: shared.VerifyV2ServiceWebhook;
}
