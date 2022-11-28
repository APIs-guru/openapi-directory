import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BulkexportsV1ExportConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook_method" })
  webhookMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}
