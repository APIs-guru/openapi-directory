import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Check } from "./check";


// CheckOutput
/** 
 * Represents the result of a background check search
**/
export class CheckOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=check" })
  check: Check;

  @Metadata({ data: "json, name=details" })
  details: string;

  @Metadata({ data: "json, name=self" })
  self: string;
}
