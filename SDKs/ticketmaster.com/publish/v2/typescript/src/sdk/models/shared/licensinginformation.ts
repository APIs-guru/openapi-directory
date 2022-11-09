import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegionRestrictions } from "./regionrestrictions";


// LicensingInformation
/** 
 * This class defines an entitlement data on the Publish API
**/
export class LicensingInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=license" })
  license: string;

  @Metadata({ data: "json, name=regionRestriction" })
  regionRestriction?: RegionRestrictions;
}
