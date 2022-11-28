import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LicensingInformation } from "./licensinginformation";
import { Source } from "./source";



// Video
/** 
 * This class defines an entitlement data on the Publish API
**/
export class Video extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=embedUrl" })
  embedUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=licensingInformation" })
  licensingInformation: LicensingInformation;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: Source;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
