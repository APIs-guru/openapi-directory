import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimplifiedShowObject } from "./simplifiedshowobject";



// SavedShowObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-savedshowobject - Find more info on the official Spotify Web API Reference
**/
export class SavedShowObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added_at" })
  addedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=show" })
  show?: SimplifiedShowObject;
}
