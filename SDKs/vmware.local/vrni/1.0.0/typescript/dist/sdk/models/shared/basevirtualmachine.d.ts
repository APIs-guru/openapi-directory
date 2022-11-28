import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSet } from "./ruleset";
import { EntityTypeEnum } from "./entitytypeenum";
import { IpV4Address } from "./ipv4address";
import { Reference } from "./reference";
export declare class BaseVirtualMachine extends SpeakeasyBase {
    defaultGateway?: string;
    destinationFirewallRules?: RuleSet[];
    entityId?: string;
    entityType?: EntityTypeEnum;
    ipAddresses?: IpV4Address[];
    ipSets?: Reference[];
    name?: string;
    securityGroups?: Reference[];
    sourceFirewallRules?: RuleSet[];
    vnics?: Reference[];
}
