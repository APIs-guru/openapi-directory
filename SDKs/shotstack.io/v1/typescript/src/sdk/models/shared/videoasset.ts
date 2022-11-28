import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Crop } from "./crop";



// VideoAsset
/** 
 * The VideoAsset is used to create video sequences from video files. The src must be a publicly accessible URL to a video resource such as an mp4 file.
**/
export class VideoAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crop" })
  crop?: Crop;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src: string;

  @SpeakeasyMetadata({ data: "json, name=trim" })
  trim?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: number;
}
