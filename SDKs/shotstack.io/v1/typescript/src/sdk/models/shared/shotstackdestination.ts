import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShotstackDestination
/** 
 * Send rendered assets to the Shotstack hosting and CDN service. This destination is enabled by default.
**/
export class ShotstackDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclude" })
  exclude?: boolean;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider: string;
}
