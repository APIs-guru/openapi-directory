import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContextObject } from "./contextobject";
import { TrackObject } from "./trackobject";
import { EpisodeObject } from "./episodeobject";



// CurrentlyPlayingObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingobject - Find more info on the official Spotify Web API Reference
**/
export class CurrentlyPlayingObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: ContextObject;

  @SpeakeasyMetadata({ data: "json, name=currently_playing_type" })
  currentlyPlayingType?: string;

  @SpeakeasyMetadata({ data: "json, name=is_playing" })
  isPlaying?: boolean;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: any;

  @SpeakeasyMetadata({ data: "json, name=progress_ms" })
  progressMs?: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
