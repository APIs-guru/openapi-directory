import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Crop
/** 
 * Crop the sides of an asset by a relative amount. The size of the crop is specified using a scale between 0 and 1, relative to the screen width - i.e a left crop of 0.5 will crop half of the asset from the left, a top crop  of 0.25 will crop the top by quarter of the asset.
**/
export class Crop extends SpeakeasyBase {
  @Metadata({ data: "json, name=bottom" })
  bottom?: number;

  @Metadata({ data: "json, name=left" })
  left?: number;

  @Metadata({ data: "json, name=right" })
  right?: number;

  @Metadata({ data: "json, name=top" })
  top?: number;
}
