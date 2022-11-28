import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookResource } from "./webhookresource";
export declare class ListWebhooksResponseLinks extends SpeakeasyBase {
    next: string;
    prev: string;
}
/**
 * Successful response to get all webhooks. This returns a paginated list of
 * webhooks, which can be scrolled by following the `prev` and `next` links
 * if present.
 *
**/
export declare class ListWebhooksResponse extends SpeakeasyBase {
    data: WebhookResource[];
    links: ListWebhooksResponseLinks;
}
