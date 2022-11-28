import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Range
/** 
 * Specify a time range to render, i.e. to render only a portion of a video or audio file. Omit this setting to  export the entire video. Range can also be used to render a frame at a specific time point - setting a range and output format as `jpg` will output a single frame image at the range `start` point.
**/
export class Range extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;
}
