import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
import { Reference } from "./reference";


export class DistributedVirtualSwitch extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity_id" })
  entityId?: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @Metadata({ data: "json, name=hosts", elemType: shared.Reference })
  hosts?: Reference[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=vcenter_manager" })
  vcenterManager?: Reference;

  @Metadata({ data: "json, name=vendor_id" })
  vendorId?: string;
}
