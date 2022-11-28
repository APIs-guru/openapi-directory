import { SpeakeasyBase } from "../../../internal/utils";
import { LicensingInformation } from "./licensinginformation";
import { Source } from "./source";
/**
 * This class defines an entitlement data on the Publish API
**/
export declare class Video extends SpeakeasyBase {
    embedUrl?: string;
    licensingInformation: LicensingInformation;
    source: Source;
    url: string;
}
