import { SpeakeasyBase } from "../../../internal/utils";
import { RuleTargetEnum } from "./ruletargetenum";
/**
 * list of groups to exclude from rule application
**/
export declare class RuleTargetsExclude extends SpeakeasyBase {
    or?: RuleTargetEnum[];
}
/**
 * list of groups to include in rule application
**/
export declare class RuleTargetsInclude extends SpeakeasyBase {
    or?: RuleTargetEnum[];
}
export declare class RuleTargets extends SpeakeasyBase {
    exclude: RuleTargetsExclude;
    include: RuleTargetsInclude;
}
