import { SpeakeasyBase } from "../../../internal/utils";
import { Clip } from "./clip";
/**
 * A track contains an array of clips. Tracks are layered on top of each other in the order in the array. The top most track will render on top of those below it.
**/
export declare class Track extends SpeakeasyBase {
    clips: Clip[];
}
