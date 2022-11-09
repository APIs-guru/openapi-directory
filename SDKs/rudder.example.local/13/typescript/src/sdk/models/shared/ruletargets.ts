import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleTargetEnum } from "./ruletargetenum";
import { RuleTargetEnum } from "./ruletargetenum";


// RuleTargetsExclude
/** 
 * list of groups to exclude from rule application
**/
export class RuleTargetsExclude extends SpeakeasyBase {
  @Metadata({ data: "json, name=or" })
  or?: RuleTargetEnum[];
}


// RuleTargetsInclude
/** 
 * list of groups to include in rule application
**/
export class RuleTargetsInclude extends SpeakeasyBase {
  @Metadata({ data: "json, name=or" })
  or?: RuleTargetEnum[];
}


export class RuleTargets extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclude" })
  exclude: RuleTargetsExclude;

  @Metadata({ data: "json, name=include" })
  include: RuleTargetsInclude;
}
