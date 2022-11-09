import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SimplifiedShowObject } from "./simplifiedshowobject";


// SavedShowObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-savedshowobject - Find more info on the official Spotify Web API Reference
**/
export class SavedShowObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=added_at" })
  addedAt?: Date;

  @Metadata({ data: "json, name=show" })
  show?: SimplifiedShowObject;
}
