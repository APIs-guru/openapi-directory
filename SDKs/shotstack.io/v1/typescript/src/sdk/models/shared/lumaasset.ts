import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LumaAsset
/** 
 * The LumaAsset is used to create luma matte masks, transitions and effects between other assets. A luma matte is a grey scale image or animated video where the black areas are transparent and the white areas solid. The luma matte animation should be provided as an mp4 video file. The src must be a publicly accessible URL to the file.
**/
export class LumaAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=src" })
  src: string;

  @SpeakeasyMetadata({ data: "json, name=trim" })
  trim?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
