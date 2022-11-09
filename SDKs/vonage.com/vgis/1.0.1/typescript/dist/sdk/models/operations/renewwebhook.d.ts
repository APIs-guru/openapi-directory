import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RenewWebhookPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RenewWebhookRequest extends SpeakeasyBase {
    pathParams: RenewWebhookPathParams;
}
export declare class RenewWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    webhook?: shared.Webhook;
}
