import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Meta
/** 
 * JSON API-compliant object containing metadata about this response
**/
export class Meta extends SpeakeasyBase {
  @Metadata({ data: "json, name=band_version" })
  bandVersion?: string;
}
