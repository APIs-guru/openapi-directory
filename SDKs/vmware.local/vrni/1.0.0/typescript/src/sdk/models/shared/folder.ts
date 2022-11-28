import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";



export class Folder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity_id" })
  entityId?: string;

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=vcenter_manager" })
  vcenterManager?: Reference;

  @SpeakeasyMetadata({ data: "json, name=vendor_id" })
  vendorId?: string;
}
