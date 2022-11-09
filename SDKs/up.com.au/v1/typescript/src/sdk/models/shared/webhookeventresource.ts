import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WebhookEventResourceAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=eventType" })
  eventType: any;
}


export class WebhookEventResourceRelationshipsTransactionData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class WebhookEventResourceRelationshipsTransactionLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=related" })
  related: string;
}


export class WebhookEventResourceRelationshipsTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: WebhookEventResourceRelationshipsTransactionData;

  @Metadata({ data: "json, name=links" })
  links?: WebhookEventResourceRelationshipsTransactionLinks;
}


export class WebhookEventResourceRelationshipsWebhookData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class WebhookEventResourceRelationshipsWebhookLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=related" })
  related: string;
}


export class WebhookEventResourceRelationshipsWebhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: WebhookEventResourceRelationshipsWebhookData;

  @Metadata({ data: "json, name=links" })
  links?: WebhookEventResourceRelationshipsWebhookLinks;
}


export class WebhookEventResourceRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=transaction" })
  transaction?: WebhookEventResourceRelationshipsTransaction;

  @Metadata({ data: "json, name=webhook" })
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
  @Metadata({ data: "json, name=attributes" })
  attributes: WebhookEventResourceAttributes;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=relationships" })
  relationships: WebhookEventResourceRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}
