import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";


export class DistributedVirtualPortgroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=distributed_virtual_switch" })
  distributedVirtualSwitch?: Reference;

  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=vcenter_manager" })
  vcenterManager?: Reference;

  @Metadata({ data: "json, name=vendor_id" })
  vendorId?: string;
}
