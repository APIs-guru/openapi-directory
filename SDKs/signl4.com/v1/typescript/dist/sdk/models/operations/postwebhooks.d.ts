import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWebhooksRequests extends SpeakeasyBase {
    webhookBaseInfo?: shared.WebhookBaseInfo;
    webhookBaseInfo1?: shared.WebhookBaseInfo;
    webhookBaseInfo2?: shared.WebhookBaseInfo;
    webhookBaseInfo3?: shared.WebhookBaseInfo;
}
export declare class PostWebhooksRequest extends SpeakeasyBase {
    request?: PostWebhooksRequests;
}
export declare class PostWebhooksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    postWebhooks201ApplicationJsonString?: string;
    postWebhooks201TextJsonString?: string;
    postWebhooks201TextPlainString?: string;
    statusCode: number;
}
