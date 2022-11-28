import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSet } from "./ruleset";
import { EntityTypeEnum } from "./entitytypeenum";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";
export declare class BaseIpSet extends SpeakeasyBase {
    directDestinationRules?: RuleSet[];
    directSourceRules?: RuleSet[];
    entityId?: string;
    entityType?: EntityTypeEnum;
    indirectDestinationRules?: RuleSet[];
    indirectSourceRules?: RuleSet[];
    ipAddresses?: IpV4Address[];
    ipNumericRanges?: any[];
    ipRanges?: any[];
    name?: string;
    parentSecurityGroups?: Reference[];
    translatedVmCount?: number;
    vendor?: string;
    vendorId?: string;
}
