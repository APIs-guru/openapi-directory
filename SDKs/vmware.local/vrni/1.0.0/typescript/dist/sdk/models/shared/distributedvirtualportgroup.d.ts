import { SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
export declare class DistributedVirtualPortgroup extends SpeakeasyBase {
    distributedVirtualSwitch?: Reference;
    entityId?: string;
    entityType?: EntityTypeEnum;
    name?: string;
    vcenterManager?: Reference;
    vendorId?: string;
}
