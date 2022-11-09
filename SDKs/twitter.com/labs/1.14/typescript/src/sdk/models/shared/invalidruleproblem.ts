import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvalidRuleProblem
/** 
 * The rule you have submitted is invalid.
**/
export class InvalidRuleProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
