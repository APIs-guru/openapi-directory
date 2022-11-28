import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWebhooksWebhookIdEnablePathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class PostWebhooksWebhookIdEnableRequest extends SpeakeasyBase {
    pathParams: PostWebhooksWebhookIdEnablePathParams;
}
export declare class PostWebhooksWebhookIdEnableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    webhookInfo?: shared.WebhookInfo;
}
