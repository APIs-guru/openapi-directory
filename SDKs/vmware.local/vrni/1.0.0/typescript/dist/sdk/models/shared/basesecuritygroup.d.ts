import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSet } from "./ruleset";
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
export declare class BaseSecurityGroup extends SpeakeasyBase {
    directDestinationRules?: RuleSet[];
    directMembers?: Reference[];
    directSourceRules?: RuleSet[];
    entityId?: string;
    entityType?: EntityTypeEnum;
    excludedMembers?: Reference[];
    indirectDestinationRules?: RuleSet[];
    indirectSourceRules?: RuleSet[];
    members?: Reference[];
    name?: string;
    parents?: Reference[];
    translatedVmCount?: number;
    vendorId?: string;
}
