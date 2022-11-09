import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: number;

  @Metadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @Metadata({ data: "json, name=processed_at" })
  processedAt?: number;

  @Metadata({ data: "json, name=processor_id" })
  processorId?: string;

  @Metadata({ data: "json, name=site_id" })
  siteId?: string;

  @Metadata({ data: "json, name=source_id" })
  sourceId?: string;

  @Metadata({ data: "json, name=source_name" })
  sourceName?: string;

  @Metadata({ data: "json, name=source_type" })
  sourceType?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=success" })
  success?: boolean;

  @Metadata({ data: "json, name=target_id" })
  targetId?: string;

  @Metadata({ data: "json, name=target_name" })
  targetName?: string;

  @Metadata({ data: "json, name=target_type" })
  targetType?: string;
}
