import { SpeakeasyBase } from "../../../internal/utils";
import { Reference } from "./reference";
import { SimplePortRange } from "./simpleportrange";
export declare enum RecommendedRuleActionEnum {
    Allow = "ALLOW",
    Drop = "DROP"
}
export declare class RecommendedRule extends SpeakeasyBase {
    action?: RecommendedRuleActionEnum;
    destinations?: Reference[];
    portRanges?: SimplePortRange[];
    protocols?: string[];
    sources?: Reference[];
}
