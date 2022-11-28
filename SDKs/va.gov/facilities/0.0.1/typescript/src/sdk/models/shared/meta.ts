import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Meta
/** 
 * JSON API-compliant object containing metadata about this response
**/
export class Meta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=band_version" })
  bandVersion?: string;
}
