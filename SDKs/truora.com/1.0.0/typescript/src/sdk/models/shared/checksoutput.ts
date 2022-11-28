import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Check } from "./check";



// ChecksOutput
/** 
 * Represents the results of a background check search
**/
export class ChecksOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checks", elemType: Check })
  checks: Check[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self: string;
}
