import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebhookDeliveryLogResourceAttributesRequest
/** 
 * Information about the request that was sent to the webhook URL.
 * 
**/
export class WebhookDeliveryLogResourceAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;
}


// WebhookDeliveryLogResourceAttributesResponse
/** 
 * Information about the response that was received from the webhook URL.
 * 
**/
export class WebhookDeliveryLogResourceAttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode: number;
}


export class WebhookDeliveryLogResourceAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=deliveryStatus" })
  deliveryStatus: any;

  @Metadata({ data: "json, name=request" })
  request: WebhookDeliveryLogResourceAttributesRequest;

  @Metadata({ data: "json, name=response" })
  response: WebhookDeliveryLogResourceAttributesResponse;
}


export class WebhookDeliveryLogResourceRelationshipsWebhookEventData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class WebhookDeliveryLogResourceRelationshipsWebhookEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: WebhookDeliveryLogResourceRelationshipsWebhookEventData;
}


export class WebhookDeliveryLogResourceRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=webhookEvent" })
  webhookEvent: WebhookDeliveryLogResourceRelationshipsWebhookEvent;
}


// WebhookDeliveryLogResource
/** 
 * Provides historical webhook event delivery information for analysis and
 * debugging purposes.
 * 
**/
export class WebhookDeliveryLogResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: WebhookDeliveryLogResourceAttributes;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=relationships" })
  relationships: WebhookDeliveryLogResourceRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}
