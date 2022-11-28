import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ServiceOffering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived_at" })
  archivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=display_name" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=distributor" })
  distributor?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=extra" })
  extra?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_seen_at" })
  lastSeenAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=long_description" })
  longDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=refresh_state_part_id" })
  refreshStatePartId?: string;

  @SpeakeasyMetadata({ data: "json, name=service_inventory_id" })
  serviceInventoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=source_created_at" })
  sourceCreatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=source_deleted_at" })
  sourceDeletedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=source_ref" })
  sourceRef?: string;

  @SpeakeasyMetadata({ data: "json, name=support_url" })
  supportUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
