import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RulesCapProblem
/** 
 * You have exceeded the maximum number of rules.
**/
export class RulesCapProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
