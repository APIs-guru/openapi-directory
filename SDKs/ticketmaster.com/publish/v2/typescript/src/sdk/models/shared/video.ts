import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LicensingInformation } from "./licensinginformation";
import { Source } from "./source";


// Video
/** 
 * This class defines an entitlement data on the Publish API
**/
export class Video extends SpeakeasyBase {
  @Metadata({ data: "json, name=embedUrl" })
  embedUrl?: string;

  @Metadata({ data: "json, name=licensingInformation" })
  licensingInformation: LicensingInformation;

  @Metadata({ data: "json, name=source" })
  source: Source;

  @Metadata({ data: "json, name=url" })
  url: string;
}
