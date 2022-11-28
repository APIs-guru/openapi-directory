import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Poster
/** 
 * Generate a poster image for the video at a specific point from the timeline. The poster image size will match the size of the output video.
**/
export class Poster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capture" })
  capture: number;
}
