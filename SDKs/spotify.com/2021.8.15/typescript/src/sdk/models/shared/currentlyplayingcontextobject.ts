import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=actions" })
  actions?: DisallowsObject;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: ContextObject;

  @SpeakeasyMetadata({ data: "json, name=currently_playing_type" })
  currentlyPlayingType?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: DeviceObject;

  @SpeakeasyMetadata({ data: "json, name=is_playing" })
  isPlaying?: boolean;

  @SpeakeasyMetadata({ data: "json, name=item" })
  item?: any;

  @SpeakeasyMetadata({ data: "json, name=progress_ms" })
  progressMs?: number;

  @SpeakeasyMetadata({ data: "json, name=repeat_state" })
  repeatState?: string;

  @SpeakeasyMetadata({ data: "json, name=shuffle_state" })
  shuffleState?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
