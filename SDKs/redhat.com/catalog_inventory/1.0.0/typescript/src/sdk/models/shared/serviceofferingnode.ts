import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ServiceOfferingNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived_at" })
  archivedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=extra" })
  extra?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_seen_at" })
  lastSeenAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=refresh_state_part_id" })
  refreshStatePartId?: string;

  @SpeakeasyMetadata({ data: "json, name=root_service_offering_id" })
  rootServiceOfferingId?: string;

  @SpeakeasyMetadata({ data: "json, name=service_inventory_id" })
  serviceInventoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=service_offering_id" })
  serviceOfferingId?: string;

  @SpeakeasyMetadata({ data: "json, name=source_created_at" })
  sourceCreatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=source_id" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=source_ref" })
  sourceRef?: string;

  @SpeakeasyMetadata({ data: "json, name=source_updated_at" })
  sourceUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
