import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Output } from "./output";
import { Timeline } from "./timeline";
export declare enum EditDiskEnum {
    Local = "local",
    Mount = "mount"
}
/**
 * An edit defines the arrangement of a video on a timeline, an audio edit or an image design and the output format.
**/
export declare class Edit extends SpeakeasyBase {
    callback?: string;
    disk?: EditDiskEnum;
    output: Output;
    timeline: Timeline;
}
