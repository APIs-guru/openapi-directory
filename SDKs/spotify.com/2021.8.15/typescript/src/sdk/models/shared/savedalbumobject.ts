import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AlbumObject } from "./albumobject";


// SavedAlbumObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-savedalbumobject - Find more info on the official Spotify Web API Reference
**/
export class SavedAlbumObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=added_at" })
  addedAt?: Date;

  @Metadata({ data: "json, name=album" })
  album?: AlbumObject;
}
