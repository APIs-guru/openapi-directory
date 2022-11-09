import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Segment
/** 
 * Segment
**/
export class Segment extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=names" })
  names?: Map<string, string>;
}
