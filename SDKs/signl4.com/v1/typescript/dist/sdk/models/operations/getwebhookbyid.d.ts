import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhookByIdPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class GetWebhookByIdRequest extends SpeakeasyBase {
    pathParams: GetWebhookByIdPathParams;
}
export declare class GetWebhookByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    getWebhookById200ApplicationJsonString?: string;
    getWebhookById200TextJsonString?: string;
    getWebhookById200TextPlainString?: string;
    statusCode: number;
}
