import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WltRecord
/** 
 * A Win-Loss-Tie record for a team, or an alliance.
**/
export class WltRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=losses" })
  losses: number;

  @SpeakeasyMetadata({ data: "json, name=ties" })
  ties: number;

  @SpeakeasyMetadata({ data: "json, name=wins" })
  wins: number;
}
