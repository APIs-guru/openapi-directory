import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DuplicateRuleProblem
/** 
 * The rule you have submitted is a duplicate.
**/
export class DuplicateRuleProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
