import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=processed_at" })
  processedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=processor_id" })
  processorId?: string;

  @SpeakeasyMetadata({ data: "json, name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=source_name" })
  sourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=source_type" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=target_id" })
  targetId?: string;

  @SpeakeasyMetadata({ data: "json, name=target_name" })
  targetName?: string;

  @SpeakeasyMetadata({ data: "json, name=target_type" })
  targetType?: string;
}
