import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WebhookEventResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType: any;
}


export class WebhookEventResourceRelationshipsTransactionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class WebhookEventResourceRelationshipsTransactionLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: string;
}


export class WebhookEventResourceRelationshipsTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: WebhookEventResourceRelationshipsTransactionData;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: WebhookEventResourceRelationshipsTransactionLinks;
}


export class WebhookEventResourceRelationshipsWebhookData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class WebhookEventResourceRelationshipsWebhookLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: string;
}


export class WebhookEventResourceRelationshipsWebhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: WebhookEventResourceRelationshipsWebhookData;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: WebhookEventResourceRelationshipsWebhookLinks;
}


export class WebhookEventResourceRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: WebhookEventResourceRelationshipsTransaction;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook: WebhookEventResourceRelationshipsWebhook;
}


// WebhookEventResource
/** 
 * Provides the event data used in asynchronous webhook event callbacks to
 * subscribed endpoints. Webhooks events have defined `eventType`s and may
 * optionally relate to other resources within the Up API.
 * 
**/
export class WebhookEventResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: WebhookEventResourceAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships: WebhookEventResourceRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
