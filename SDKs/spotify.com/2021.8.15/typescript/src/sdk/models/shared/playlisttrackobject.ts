import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicUserObject } from "./publicuserobject";
import { TrackObject } from "./trackobject";
import { EpisodeObject } from "./episodeobject";



// PlaylistTrackObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-playlisttrackobject - Find more info on the official Spotify Web API Reference
**/
export class PlaylistTrackObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added_at" })
  addedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=added_by" })
  addedBy?: PublicUserObject;

  @SpeakeasyMetadata({ data: "json, name=is_local" })
  isLocal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=track" })
  track?: any;
}
