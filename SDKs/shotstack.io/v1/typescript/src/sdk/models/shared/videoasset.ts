import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Crop } from "./crop";


// VideoAsset
/** 
 * The VideoAsset is used to create video sequences from video files. The src must be a publicly accessible URL to a video resource such as an mp4 file.
**/
export class VideoAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=crop" })
  crop?: Crop;

  @Metadata({ data: "json, name=src" })
  src: string;

  @Metadata({ data: "json, name=trim" })
  trim?: number;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=volume" })
  volume?: number;
}
