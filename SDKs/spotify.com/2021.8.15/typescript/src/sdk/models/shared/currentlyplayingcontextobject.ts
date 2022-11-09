import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DisallowsObject } from "./disallowsobject";
import { ContextObject } from "./contextobject";
import { DeviceObject } from "./deviceobject";
import { TrackObject } from "./trackobject";
import { EpisodeObject } from "./episodeobject";


// CurrentlyPlayingContextObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-currentlyplayingcontextobject - Find more info on the official Spotify Web API Reference
**/
export class CurrentlyPlayingContextObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=actions" })
  actions?: DisallowsObject;

  @Metadata({ data: "json, name=context" })
  context?: ContextObject;

  @Metadata({ data: "json, name=currently_playing_type" })
  currentlyPlayingType?: string;

  @Metadata({ data: "json, name=device" })
  device?: DeviceObject;

  @Metadata({ data: "json, name=is_playing" })
  isPlaying?: boolean;

  @Metadata({ data: "json, name=item" })
  item?: any;

  @Metadata({ data: "json, name=progress_ms" })
  progressMs?: number;

  @Metadata({ data: "json, name=repeat_state" })
  repeatState?: string;

  @Metadata({ data: "json, name=shuffle_state" })
  shuffleState?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
