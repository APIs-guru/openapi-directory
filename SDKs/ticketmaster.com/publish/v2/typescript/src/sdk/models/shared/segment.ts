import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Segment
/** 
 * Segment
**/
export class Segment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: Map<string, string>;
}
