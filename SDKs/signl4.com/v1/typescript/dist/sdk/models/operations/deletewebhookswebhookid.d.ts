import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWebhooksWebhookIdPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class DeleteWebhooksWebhookIdRequest extends SpeakeasyBase {
    pathParams: DeleteWebhooksWebhookIdPathParams;
}
export declare class DeleteWebhooksWebhookIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
}
