import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWebhooksWebhookIdPingPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class PostWebhooksWebhookIdPingRequest extends SpeakeasyBase {
    pathParams: PostWebhooksWebhookIdPingPathParams;
}
export declare class PostWebhooksWebhookIdPingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookEventCallback?: shared.WebhookEventCallback;
}
