import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Clip } from "./clip";


// Track
/** 
 * A track contains an array of clips. Tracks are layered on top of each other in the order in the array. The top most track will render on top of those below it.
**/
export class Track extends SpeakeasyBase {
  @Metadata({ data: "json, name=clips", elemType: shared.Clip })
  clips: Clip[];
}
