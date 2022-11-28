import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebhookDeliveryLogResourceAttributesRequest
/** 
 * Information about the request that was sent to the webhook URL.
 * 
**/
export class WebhookDeliveryLogResourceAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;
}


// WebhookDeliveryLogResourceAttributesResponse
/** 
 * Information about the response that was received from the webhook URL.
 * 
**/
export class WebhookDeliveryLogResourceAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode: number;
}


export class WebhookDeliveryLogResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=deliveryStatus" })
  deliveryStatus: any;

  @SpeakeasyMetadata({ data: "json, name=request" })
  request: WebhookDeliveryLogResourceAttributesRequest;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response: WebhookDeliveryLogResourceAttributesResponse;
}


export class WebhookDeliveryLogResourceRelationshipsWebhookEventData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class WebhookDeliveryLogResourceRelationshipsWebhookEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: WebhookDeliveryLogResourceRelationshipsWebhookEventData;
}


export class WebhookDeliveryLogResourceRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhookEvent" })
  webhookEvent: WebhookDeliveryLogResourceRelationshipsWebhookEvent;
}


// WebhookDeliveryLogResource
/** 
 * Provides historical webhook event delivery information for analysis and
 * debugging purposes.
 * 
**/
export class WebhookDeliveryLogResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: WebhookDeliveryLogResourceAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships: WebhookDeliveryLogResourceRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
