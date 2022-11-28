import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Clip } from "./clip";



// Track
/** 
 * A track contains an array of clips. Tracks are layered on top of each other in the order in the array. The top most track will render on top of those below it.
**/
export class Track extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clips", elemType: Clip })
  clips: Clip[];
}
