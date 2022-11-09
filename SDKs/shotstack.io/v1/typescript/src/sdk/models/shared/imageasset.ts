import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Crop } from "./crop";


// ImageAsset
/** 
 * The ImageAsset is used to create video from images to compose an image. The src must be a publicly accessible URL to an image resource such as a jpg or png file.
**/
export class ImageAsset extends SpeakeasyBase {
  @Metadata({ data: "json, name=crop" })
  crop?: Crop;

  @Metadata({ data: "json, name=src" })
  src: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
