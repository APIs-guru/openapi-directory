import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Twitter } from "./twitter";



// Social
/** 
 * Social networks data
**/
export class Social extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=twitter" })
  twitter?: Twitter;
}
