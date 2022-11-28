import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallActionEnum } from "./firewallactionenum";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
import { PortRange } from "./portrange";
export declare class BaseFirewallRule extends SpeakeasyBase {
    action?: FirewallActionEnum;
    destinationAny?: boolean;
    destinationInversion?: boolean;
    destinations?: Reference[];
    disabled?: boolean;
    entityId?: string;
    entityType?: EntityTypeEnum;
    name?: string;
    portRanges?: PortRange[];
    ruleId?: string;
    sectionId?: string;
    sectionName?: string;
    sequenceNumber?: number;
    serviceAny?: boolean;
    services?: Reference[];
    sourceAny?: boolean;
    sourceInversion?: boolean;
    sources?: Reference[];
}
