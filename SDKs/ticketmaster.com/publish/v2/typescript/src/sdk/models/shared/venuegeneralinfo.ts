import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VenueGeneralInfo
/** 
 * Venue general information
**/
export class VenueGeneralInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=childRules" })
  childRules?: Map<string, string>;

  @Metadata({ data: "json, name=generalRules" })
  generalRules?: Map<string, string>;
}
