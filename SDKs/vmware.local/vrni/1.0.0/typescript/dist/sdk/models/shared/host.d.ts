import { SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
export declare class Host extends SpeakeasyBase {
    cluster?: Reference;
    connectionState?: string;
    datastores?: Reference[];
    entityId?: string;
    entityType?: EntityTypeEnum;
    maintenanceMode?: string;
    name?: string;
    nsxManager?: Reference;
    serviceTag?: string;
    vcenterManager?: Reference;
    vendorId?: string;
    vmCount?: number;
    vmknics?: Reference[];
}
