import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutWebhooksWebhookIdPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class PutWebhooksWebhookIdRequests extends SpeakeasyBase {
    webhookBaseInfo?: shared.WebhookBaseInfo;
    webhookBaseInfo1?: shared.WebhookBaseInfo;
    webhookBaseInfo2?: shared.WebhookBaseInfo;
    webhookBaseInfo3?: shared.WebhookBaseInfo;
}
export declare class PutWebhooksWebhookIdRequest extends SpeakeasyBase {
    pathParams: PutWebhooksWebhookIdPathParams;
    request?: PutWebhooksWebhookIdRequests;
}
export declare class PutWebhooksWebhookIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    webhookInfo?: shared.WebhookInfo;
}
