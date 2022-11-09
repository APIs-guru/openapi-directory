import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Check } from "./check";


// ListContinuousChecksOutput
/** 
 * Represents to ListContinuousChecksOutput
**/
export class ListContinuousChecksOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=continuous_checks", elemType: shared.Check })
  continuousChecks?: Check[];

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=self" })
  self?: string;
}
