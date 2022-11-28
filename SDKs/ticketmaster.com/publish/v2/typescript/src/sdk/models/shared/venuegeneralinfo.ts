import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VenueGeneralInfo
/** 
 * Venue general information
**/
export class VenueGeneralInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childRules" })
  childRules?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=generalRules" })
  generalRules?: Map<string, string>;
}
