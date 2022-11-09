import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicUserObject } from "./publicuserobject";
import { TrackObject } from "./trackobject";
import { EpisodeObject } from "./episodeobject";


// PlaylistTrackObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-playlisttrackobject - Find more info on the official Spotify Web API Reference
**/
export class PlaylistTrackObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=added_at" })
  addedAt?: Date;

  @Metadata({ data: "json, name=added_by" })
  addedBy?: PublicUserObject;

  @Metadata({ data: "json, name=is_local" })
  isLocal?: boolean;

  @Metadata({ data: "json, name=track" })
  track?: any;
}
