import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { Reference } from "./reference";
export declare class Cluster extends SpeakeasyBase {
    entityId?: string;
    entityType?: EntityTypeEnum;
    name?: string;
    nsxManager?: Reference;
    numCpuCores?: number;
    numDatastores?: number;
    numHosts?: number;
    totalCpus?: number;
    totalMemory?: number;
    vcenterManager?: Reference;
    vendorId?: string;
}
