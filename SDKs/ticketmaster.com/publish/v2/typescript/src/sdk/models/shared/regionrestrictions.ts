import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegionRestrictions
/** 
 * This class defines an entitlement data on the Publish API
**/
export class RegionRestrictions extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed" })
  allowed?: string[];
}
