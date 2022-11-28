import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookDeliveryLogResource } from "./webhookdeliverylogresource";
export declare class ListWebhookDeliveryLogsResponseLinks extends SpeakeasyBase {
    next: string;
    prev: string;
}
/**
 * Successful response to get all delivery logs for a webhook. This returns
 * a paginated list of delivery logs, which can be scrolled by following the
 * `next` and `prev` links if present.
 *
**/
export declare class ListWebhookDeliveryLogsResponse extends SpeakeasyBase {
    data: WebhookDeliveryLogResource[];
    links: ListWebhookDeliveryLogsResponseLinks;
}
