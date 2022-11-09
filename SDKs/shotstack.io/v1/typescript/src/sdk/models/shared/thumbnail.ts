import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Thumbnail
/** 
 * Generate a thumbnail image for the video or image at a specific point from the timeline.
**/
export class Thumbnail extends SpeakeasyBase {
  @Metadata({ data: "json, name=capture" })
  capture: number;

  @Metadata({ data: "json, name=scale" })
  scale: number;
}
