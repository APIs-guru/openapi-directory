import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Level } from "./level";
import { Segment } from "./segment";
import { Level } from "./level";
import { Level } from "./level";
import { Level } from "./level";


// Classification
/** 
 * Classification
**/
export class Classification extends SpeakeasyBase {
  @Metadata({ data: "json, name=genre" })
  genre?: Level;

  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=segment" })
  segment?: Segment;

  @Metadata({ data: "json, name=subGenre" })
  subGenre?: Level;

  @Metadata({ data: "json, name=subType" })
  subType?: Level;

  @Metadata({ data: "json, name=type" })
  type?: Level;
}
