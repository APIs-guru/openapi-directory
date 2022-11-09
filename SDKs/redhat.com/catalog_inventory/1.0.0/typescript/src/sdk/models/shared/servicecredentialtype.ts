import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ServiceCredentialType extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived_at" })
  archivedAt?: Date;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=last_seen_at" })
  lastSeenAt?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=namespace" })
  namespace?: string;

  @Metadata({ data: "json, name=refresh_state_part_id" })
  refreshStatePartId?: string;

  @Metadata({ data: "json, name=source_created_at" })
  sourceCreatedAt?: Date;

  @Metadata({ data: "json, name=source_deleted_at" })
  sourceDeletedAt?: Date;

  @Metadata({ data: "json, name=source_id" })
  sourceId?: string;

  @Metadata({ data: "json, name=source_ref" })
  sourceRef?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
