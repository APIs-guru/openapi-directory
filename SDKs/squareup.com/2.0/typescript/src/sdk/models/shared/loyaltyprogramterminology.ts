import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LoyaltyProgramTerminology
/** 
 * Represents the naming used for loyalty points.
**/
export class LoyaltyProgramTerminology extends SpeakeasyBase {
  @Metadata({ data: "json, name=one" })
  one: string;

  @Metadata({ data: "json, name=other" })
  other: string;
}
