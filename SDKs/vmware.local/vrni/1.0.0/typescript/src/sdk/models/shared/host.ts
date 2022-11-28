import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";



export class Host extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: Reference;

  @SpeakeasyMetadata({ data: "json, name=connection_state" })
  connectionState?: string;

  @SpeakeasyMetadata({ data: "json, name=datastores", elemType: Reference })
  datastores?: Reference[];

  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=maintenance_mode" })
  maintenanceMode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nsx_manager" })
  nsxManager?: Reference;

  @SpeakeasyMetadata({ data: "json, name=service_tag" })
  serviceTag?: string;

  @SpeakeasyMetadata({ data: "json, name=vcenter_manager" })
  vcenterManager?: Reference;

  @SpeakeasyMetadata({ data: "json, name=vendor_id" })
  vendorId?: string;

  @SpeakeasyMetadata({ data: "json, name=vm_count" })
  vmCount?: number;

  @SpeakeasyMetadata({ data: "json, name=vmknics", elemType: Reference })
  vmknics?: Reference[];
}
