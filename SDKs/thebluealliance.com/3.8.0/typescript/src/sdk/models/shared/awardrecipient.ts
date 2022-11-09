import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwardRecipient
/** 
 * An `Award_Recipient` object represents the team and/or person who received an award at an event.
**/
export class AwardRecipient extends SpeakeasyBase {
  @Metadata({ data: "json, name=awardee" })
  awardee?: string;

  @Metadata({ data: "json, name=team_key" })
  teamKey?: string;
}
