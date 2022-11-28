import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Output } from "./output";
import { Timeline } from "./timeline";


export enum EditDiskEnum {
    Local = "local",
    Mount = "mount"
}


// Edit
/** 
 * An edit defines the arrangement of a video on a timeline, an audio edit or an image design and the output format.
**/
export class Edit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "json, name=disk" })
  disk?: EditDiskEnum;

  @SpeakeasyMetadata({ data: "json, name=output" })
  output: Output;

  @SpeakeasyMetadata({ data: "json, name=timeline" })
  timeline: Timeline;
}
