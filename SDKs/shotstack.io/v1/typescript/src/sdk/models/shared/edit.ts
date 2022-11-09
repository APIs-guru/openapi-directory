import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Output } from "./output";
import { Timeline } from "./timeline";

export enum EditDiskEnum {
    Local = "local"
,    Mount = "mount"
}


// Edit
/** 
 * An edit defines the arrangement of a video on a timeline, an audio edit or an image design and the output format.
**/
export class Edit extends SpeakeasyBase {
  @Metadata({ data: "json, name=callback" })
  callback?: string;

  @Metadata({ data: "json, name=disk" })
  disk?: EditDiskEnum;

  @Metadata({ data: "json, name=output" })
  output: Output;

  @Metadata({ data: "json, name=timeline" })
  timeline: Timeline;
}
