import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Specify a time range to render, i.e. to render only a portion of a video or audio file. Omit this setting to  export the entire video. Range can also be used to render a frame at a specific time point - setting a range and output format as `jpg` will output a single frame image at the range `start` point.
**/
export declare class Range extends SpeakeasyBase {
    length?: number;
    start?: number;
}
