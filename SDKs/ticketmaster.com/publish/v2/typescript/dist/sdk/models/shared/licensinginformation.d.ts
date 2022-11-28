import { SpeakeasyBase } from "../../../internal/utils";
import { RegionRestrictions } from "./regionrestrictions";
/**
 * This class defines an entitlement data on the Publish API
**/
export declare class LicensingInformation extends SpeakeasyBase {
    license: string;
    regionRestriction?: RegionRestrictions;
}
