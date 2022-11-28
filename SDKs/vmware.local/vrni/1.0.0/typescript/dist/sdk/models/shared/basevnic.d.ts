import { SpeakeasyBase } from "../../../internal/utils";
import { EntityTypeEnum } from "./entitytypeenum";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";
import { Vlan } from "./vlan";
export declare class BaseVnic extends SpeakeasyBase {
    entityId?: string;
    entityType?: EntityTypeEnum;
    ipAddresses?: IpV4Address[];
    layer2Network?: Reference;
    name?: string;
    vlan?: Vlan;
    vm?: Reference;
}
