import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegionRestrictions
/** 
 * This class defines an entitlement data on the Publish API
**/
export class RegionRestrictions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed" })
  allowed?: string[];
}
