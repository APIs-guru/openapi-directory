import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Check } from "./check";



// ListContinuousChecksOutput
/** 
 * Represents to ListContinuousChecksOutput
**/
export class ListContinuousChecksOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continuous_checks", elemType: Check })
  continuousChecks?: Check[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}
