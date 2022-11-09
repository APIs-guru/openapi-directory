import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Twitter } from "./twitter";


// Social
/** 
 * Social networks data
**/
export class Social extends SpeakeasyBase {
  @Metadata({ data: "json, name=twitter" })
  twitter?: Twitter;
}
