import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateWebhookRequest extends SpeakeasyBase {
    request: shared.WebhookCreate;
}
export declare class CreateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    webhook?: shared.Webhook;
}
