import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WebhookResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=secretKey" })
  secretKey?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class WebhookResourceLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}


export class WebhookResourceRelationshipsLogsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=related" })
  related: string;
}


export class WebhookResourceRelationshipsLogs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: WebhookResourceRelationshipsLogsLinks;
}


export class WebhookResourceRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logs" })
  logs: WebhookResourceRelationshipsLogs;
}


// WebhookResource
/** 
 * Provides information about a webhook.
 * 
**/
export class WebhookResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes: WebhookResourceAttributes;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: WebhookResourceLinks;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships: WebhookResourceRelationships;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
