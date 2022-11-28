import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwardRecipient
/** 
 * An `Award_Recipient` object represents the team and/or person who received an award at an event.
**/
export class AwardRecipient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=awardee" })
  awardee?: string;

  @SpeakeasyMetadata({ data: "json, name=team_key" })
  teamKey?: string;
}
