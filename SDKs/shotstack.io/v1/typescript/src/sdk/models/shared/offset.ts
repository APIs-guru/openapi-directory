import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Offset
/** 
 * Offsets the position of an asset horizontally or vertically by a relative distance.
**/
export class Offset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=x" })
  x?: number;

  @SpeakeasyMetadata({ data: "json, name=y" })
  y?: number;
}
