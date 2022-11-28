import { SpeakeasyBase } from "../../../internal/utils";
import { Crop } from "./crop";
/**
 * The VideoAsset is used to create video sequences from video files. The src must be a publicly accessible URL to a video resource such as an mp4 file.
**/
export declare class VideoAsset extends SpeakeasyBase {
    crop?: Crop;
    src: string;
    trim?: number;
    type: string;
    volume?: number;
}
