import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Level } from "./level";
import { Segment } from "./segment";



// Classification
/** 
 * Classification
**/
export class Classification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=genre" })
  genre?: Level;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=segment" })
  segment?: Segment;

  @SpeakeasyMetadata({ data: "json, name=subGenre" })
  subGenre?: Level;

  @SpeakeasyMetadata({ data: "json, name=subType" })
  subType?: Level;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: Level;
}
