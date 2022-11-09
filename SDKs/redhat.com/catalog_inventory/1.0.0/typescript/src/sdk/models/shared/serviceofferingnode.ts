import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ServiceOfferingNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=archived_at" })
  archivedAt?: Date;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

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

  @Metadata({ data: "json, name=root_service_offering_id" })
  rootServiceOfferingId?: string;

  @Metadata({ data: "json, name=service_inventory_id" })
  serviceInventoryId?: string;

  @Metadata({ data: "json, name=service_offering_id" })
  serviceOfferingId?: string;

  @Metadata({ data: "json, name=source_created_at" })
  sourceCreatedAt?: Date;

  @Metadata({ data: "json, name=source_id" })
  sourceId?: string;

  @Metadata({ data: "json, name=source_ref" })
  sourceRef?: string;

  @Metadata({ data: "json, name=source_updated_at" })
  sourceUpdatedAt?: Date;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
