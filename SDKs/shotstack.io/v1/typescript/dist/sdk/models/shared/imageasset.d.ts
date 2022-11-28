import { SpeakeasyBase } from "../../../internal/utils";
import { Crop } from "./crop";
/**
 * The ImageAsset is used to create video from images to compose an image. The src must be a publicly accessible URL to an image resource such as a jpg or png file.
**/
export declare class ImageAsset extends SpeakeasyBase {
    crop?: Crop;
    src: string;
    type: string;
}
