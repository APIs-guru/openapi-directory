import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidRuleProblem
/** 
 * The rule you have submitted is invalid.
**/
export class InvalidRuleProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
