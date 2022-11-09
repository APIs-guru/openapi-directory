import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContextObject } from "./contextobject";
import { TrackObject } from "./trackobject";
import { EpisodeObject } from "./episodeobject";


// CurrentlyPlayingObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingobject - Find more info on the official Spotify Web API Reference
**/
export class CurrentlyPlayingObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: ContextObject;

  @Metadata({ data: "json, name=currently_playing_type" })
  currentlyPlayingType?: string;

  @Metadata({ data: "json, name=is_playing" })
  isPlaying?: boolean;

  @Metadata({ data: "json, name=item" })
  item?: any;

  @Metadata({ data: "json, name=progress_ms" })
  progressMs?: number;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
