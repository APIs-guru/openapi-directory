import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AlbumObject } from "./albumobject";



// SavedAlbumObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-savedalbumobject - Find more info on the official Spotify Web API Reference
**/
export class SavedAlbumObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added_at" })
  addedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=album" })
  album?: AlbumObject;
}
