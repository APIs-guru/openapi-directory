import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ViewWebhookPathParams extends SpeakeasyBase {
    id: string;
}
export declare class ViewWebhookRequest extends SpeakeasyBase {
    pathParams: ViewWebhookPathParams;
}
export declare class ViewWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    webhook?: shared.Webhook;
}
