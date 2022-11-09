import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ServicePlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived_at" })
  archivedAt?: Date;

  @Metadata({ data: "json, name=create_json_schema" })
  createJsonSchema?: Map<string, any>;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=extra" })
  extra?: Map<string, any>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_seen_at" })
  lastSeenAt?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=refresh_state_part_id" })
  refreshStatePartId?: string;

  @Metadata({ data: "json, name=resource_version" })
  resourceVersion?: string;

  @Metadata({ data: "json, name=service_offering_id" })
  serviceOfferingId?: string;

  @Metadata({ data: "json, name=source_created_at" })
  sourceCreatedAt?: Date;

  @Metadata({ data: "json, name=source_deleted_at" })
  sourceDeletedAt?: Date;

  @Metadata({ data: "json, name=source_id" })
  sourceId?: string;

  @Metadata({ data: "json, name=source_ref" })
  sourceRef?: string;

  @Metadata({ data: "json, name=update_json_schema" })
  updateJsonSchema?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
