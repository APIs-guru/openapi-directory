import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DestroyWebhookPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DestroyWebhookRequest extends SpeakeasyBase {
    pathParams: DestroyWebhookPathParams;
}
export declare class DestroyWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
