import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WltRecord
/** 
 * A Win-Loss-Tie record for a team, or an alliance.
**/
export class WltRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=losses" })
  losses: number;

  @Metadata({ data: "json, name=ties" })
  ties: number;

  @Metadata({ data: "json, name=wins" })
  wins: number;
}
