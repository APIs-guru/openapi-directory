import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegionRestrictions } from "./regionrestrictions";



// LicensingInformation
/** 
 * This class defines an entitlement data on the Publish API
**/
export class LicensingInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=license" })
  license: string;

  @SpeakeasyMetadata({ data: "json, name=regionRestriction" })
  regionRestriction?: RegionRestrictions;
}
