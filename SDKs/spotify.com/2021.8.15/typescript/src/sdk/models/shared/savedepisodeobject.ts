import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EpisodeObject } from "./episodeobject";


// SavedEpisodeObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-savedepisodeobject - Find more info on the official Spotify Web API Reference
**/
export class SavedEpisodeObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=added_at" })
  addedAt?: Date;

  @Metadata({ data: "json, name=episode" })
  episode?: EpisodeObject;
}
