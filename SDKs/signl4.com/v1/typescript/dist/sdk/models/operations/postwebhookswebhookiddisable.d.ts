import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWebhooksWebhookIdDisablePathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class PostWebhooksWebhookIdDisableRequest extends SpeakeasyBase {
    pathParams: PostWebhooksWebhookIdDisablePathParams;
}
export declare class PostWebhooksWebhookIdDisableResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    webhookInfo?: shared.WebhookInfo;
}
