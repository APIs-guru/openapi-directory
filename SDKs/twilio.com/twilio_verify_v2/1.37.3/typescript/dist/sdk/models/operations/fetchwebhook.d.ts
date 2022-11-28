import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchWebhookServerList: readonly ["https://verify.twilio.com"];
export declare class FetchWebhookPathParams extends SpeakeasyBase {
    serviceSid: string;
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
    verifyV2ServiceWebhook?: shared.VerifyV2ServiceWebhook;
}
