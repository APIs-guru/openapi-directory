import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BulkexportsV1ExportConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=webhook_method" })
  webhookMethod?: string;

  @Metadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}
