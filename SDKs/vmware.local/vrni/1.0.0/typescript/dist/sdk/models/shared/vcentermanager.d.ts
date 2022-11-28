import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";
export declare class VCenterManager extends SpeakeasyBase {
    entityId?: string;
    entityType?: EntityTypeEnum;
    fqdn?: string;
    ipAddress?: IpV4Address;
    name?: string;
    nsxManager?: Reference;
    vm?: Reference;
}
