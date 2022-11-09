import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Offset
/** 
 * Offsets the position of an asset horizontally or vertically by a relative distance.
**/
export class Offset extends SpeakeasyBase {
  @Metadata({ data: "json, name=x" })
  x?: number;

  @Metadata({ data: "json, name=y" })
  y?: number;
}
