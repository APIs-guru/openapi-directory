import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Thumbnail
/** 
 * Generate a thumbnail image for the video or image at a specific point from the timeline.
**/
export class Thumbnail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capture" })
  capture: number;

  @SpeakeasyMetadata({ data: "json, name=scale" })
  scale: number;
}
