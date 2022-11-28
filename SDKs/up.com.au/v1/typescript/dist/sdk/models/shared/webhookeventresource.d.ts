import { SpeakeasyBase } from "../../../internal/utils";
export declare class WebhookEventResourceAttributes extends SpeakeasyBase {
    createdAt: Date;
    eventType: any;
}
export declare class WebhookEventResourceRelationshipsTransactionData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class WebhookEventResourceRelationshipsTransactionLinks extends SpeakeasyBase {
    related: string;
}
export declare class WebhookEventResourceRelationshipsTransaction extends SpeakeasyBase {
    data: WebhookEventResourceRelationshipsTransactionData;
    links?: WebhookEventResourceRelationshipsTransactionLinks;
}
export declare class WebhookEventResourceRelationshipsWebhookData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class WebhookEventResourceRelationshipsWebhookLinks extends SpeakeasyBase {
    related: string;
}
export declare class WebhookEventResourceRelationshipsWebhook extends SpeakeasyBase {
    data: WebhookEventResourceRelationshipsWebhookData;
    links?: WebhookEventResourceRelationshipsWebhookLinks;
}
export declare class WebhookEventResourceRelationships extends SpeakeasyBase {
    transaction?: WebhookEventResourceRelationshipsTransaction;
    webhook: WebhookEventResourceRelationshipsWebhook;
}
/**
 * Provides the event data used in asynchronous webhook event callbacks to
 * subscribed endpoints. Webhooks events have defined `eventType`s and may
 * optionally relate to other resources within the Up API.
 *
**/
export declare class WebhookEventResource extends SpeakeasyBase {
    attributes: WebhookEventResourceAttributes;
    id: string;
    relationships: WebhookEventResourceRelationships;
    type: string;
}
