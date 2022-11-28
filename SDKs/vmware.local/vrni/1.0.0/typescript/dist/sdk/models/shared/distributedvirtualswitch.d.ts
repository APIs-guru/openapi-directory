import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
export declare class DistributedVirtualSwitch extends SpeakeasyBase {
    entityId?: string;
    entityType?: EntityTypeEnum;
    hosts?: Reference[];
    name?: string;
    vcenterManager?: Reference;
    vendorId?: string;
}
