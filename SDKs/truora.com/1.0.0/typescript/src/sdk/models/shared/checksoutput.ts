import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Check } from "./check";


// ChecksOutput
/** 
 * Represents the results of a background check search
**/
export class ChecksOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=checks", elemType: shared.Check })
  checks: Check[];

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=self" })
  self: string;
}
