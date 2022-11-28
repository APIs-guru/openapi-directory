import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
export declare class VcDatacenter extends SpeakeasyBase {
    entityId?: string;
    entityType?: EntityTypeEnum;
    name?: string;
    vcenterManager?: Reference;
    vendorId?: string;
}
