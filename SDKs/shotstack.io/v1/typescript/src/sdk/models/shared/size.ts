import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Size
/** 
 * Set a custom size for a video or image. When using a custom size omit the `resolution` and `aspectRatio`. Custom sizes must be divisible by 2 based on the encoder specifications.
**/
export class Size extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
