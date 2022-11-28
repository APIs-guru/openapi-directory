import { SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
export declare enum RuleSetRuleSetTypeEnum {
    NsxStandard = "NSX_STANDARD",
    NsxRedirect = "NSX_REDIRECT",
    AwsStandard = "AWS_STANDARD"
}
export declare class RuleSet extends SpeakeasyBase {
    firewall?: Reference;
    ruleSetType?: RuleSetRuleSetTypeEnum;
    rules?: Reference[];
}
