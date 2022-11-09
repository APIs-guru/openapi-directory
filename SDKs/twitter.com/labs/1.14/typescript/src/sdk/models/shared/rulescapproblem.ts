import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RulesCapProblem
/** 
 * You have exceeded the maximum number of rules.
**/
export class RulesCapProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
