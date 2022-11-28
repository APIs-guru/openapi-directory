import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Size
/** 
 * Set a custom size for a video or image. When using a custom size omit the `resolution` and `aspectRatio`. Custom sizes must be divisible by 2 based on the encoder specifications.
**/
export class Size extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
