import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhooksWebhookIdLogsPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class GetWebhooksWebhookIdLogsQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetWebhooksWebhookIdLogsRequest extends SpeakeasyBase {
    pathParams: GetWebhooksWebhookIdLogsPathParams;
    queryParams: GetWebhooksWebhookIdLogsQueryParams;
}
export declare class GetWebhooksWebhookIdLogsResponse extends SpeakeasyBase {
    contentType: string;
    listWebhookDeliveryLogsResponse?: shared.ListWebhookDeliveryLogsResponse;
    statusCode: number;
}
