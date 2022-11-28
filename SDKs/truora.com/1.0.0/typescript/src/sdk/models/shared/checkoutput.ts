import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Check } from "./check";



// CheckOutput
/** 
 * Represents the result of a background check search
**/
export class CheckOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=check" })
  check: Check;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}
