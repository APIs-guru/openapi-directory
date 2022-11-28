import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Crop } from "./crop";



// ImageAsset
/** 
 * The ImageAsset is used to create video from images to compose an image. The src must be a publicly accessible URL to an image resource such as a jpg or png file.
**/
export class ImageAsset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=crop" })
  crop?: Crop;

  @SpeakeasyMetadata({ data: "json, name=src" })
  src: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
