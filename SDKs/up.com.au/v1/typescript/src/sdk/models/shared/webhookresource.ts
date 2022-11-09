import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WebhookResourceAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=secretKey" })
  secretKey?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class WebhookResourceLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self: string;
}


export class WebhookResourceRelationshipsLogsLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=related" })
  related: string;
}


export class WebhookResourceRelationshipsLogs extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: WebhookResourceRelationshipsLogsLinks;
}


export class WebhookResourceRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=logs" })
  logs: WebhookResourceRelationshipsLogs;
}


// WebhookResource
/** 
 * Provides information about a webhook.
 * 
**/
export class WebhookResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: WebhookResourceAttributes;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=links" })
  links?: WebhookResourceLinks;

  @Metadata({ data: "json, name=relationships" })
  relationships: WebhookResourceRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}
