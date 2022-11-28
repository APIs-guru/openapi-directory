import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleTargetEnum } from "./ruletargetenum";



// RuleTargetsExclude
/** 
 * list of groups to exclude from rule application
**/
export class RuleTargetsExclude extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=or" })
  or?: RuleTargetEnum[];
}


// RuleTargetsInclude
/** 
 * list of groups to include in rule application
**/
export class RuleTargetsInclude extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=or" })
  or?: RuleTargetEnum[];
}


export class RuleTargets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclude" })
  exclude: RuleTargetsExclude;

  @SpeakeasyMetadata({ data: "json, name=include" })
  include: RuleTargetsInclude;
}
