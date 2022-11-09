import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DuplicateRuleProblem
/** 
 * The rule you have submitted is a duplicate.
**/
export class DuplicateRuleProblem extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail: string;

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
