import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EpisodeObject } from "./episodeobject";



// SavedEpisodeObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-savedepisodeobject - Find more info on the official Spotify Web API Reference
**/
export class SavedEpisodeObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added_at" })
  addedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=episode" })
  episode?: EpisodeObject;
}
