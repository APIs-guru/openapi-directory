import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShotstackDestination
/** 
 * Send rendered assets to the Shotstack hosting and CDN service. This destination is enabled by default.
**/
export class ShotstackDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclude" })
  exclude?: boolean;

  @Metadata({ data: "json, name=provider" })
  provider: string;
}
