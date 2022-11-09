import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const DELETEWEBHOOK_SERVERS: string[];
export declare class DeleteWebhookPathParams extends SpeakeasyBase {
    assistantSid: string;
    sid: string;
}
export declare class DeleteWebhookSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class DeleteWebhookRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: DeleteWebhookPathParams;
    security: DeleteWebhookSecurity;
}
export declare class DeleteWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
