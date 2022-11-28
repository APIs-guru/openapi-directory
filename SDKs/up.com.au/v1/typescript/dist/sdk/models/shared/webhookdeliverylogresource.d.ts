import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the request that was sent to the webhook URL.
 *
**/
export declare class WebhookDeliveryLogResourceAttributesRequest extends SpeakeasyBase {
    body: string;
}
/**
 * Information about the response that was received from the webhook URL.
 *
**/
export declare class WebhookDeliveryLogResourceAttributesResponse extends SpeakeasyBase {
    body: string;
    statusCode: number;
}
export declare class WebhookDeliveryLogResourceAttributes extends SpeakeasyBase {
    createdAt: Date;
    deliveryStatus: any;
    request: WebhookDeliveryLogResourceAttributesRequest;
    response: WebhookDeliveryLogResourceAttributesResponse;
}
export declare class WebhookDeliveryLogResourceRelationshipsWebhookEventData extends SpeakeasyBase {
    id: string;
    type: string;
}
export declare class WebhookDeliveryLogResourceRelationshipsWebhookEvent extends SpeakeasyBase {
    data: WebhookDeliveryLogResourceRelationshipsWebhookEventData;
}
export declare class WebhookDeliveryLogResourceRelationships extends SpeakeasyBase {
    webhookEvent: WebhookDeliveryLogResourceRelationshipsWebhookEvent;
}
/**
 * Provides historical webhook event delivery information for analysis and
 * debugging purposes.
 *
**/
export declare class WebhookDeliveryLogResource extends SpeakeasyBase {
    attributes: WebhookDeliveryLogResourceAttributes;
    id: string;
    relationships: WebhookDeliveryLogResourceRelationships;
    type: string;
}
