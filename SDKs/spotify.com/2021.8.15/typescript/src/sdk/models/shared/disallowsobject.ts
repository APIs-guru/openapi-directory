import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DisallowsObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-disallowsobject - Find more info on the official Spotify Web API Reference
**/
export class DisallowsObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=interrupting_playback" })
  interruptingPlayback?: boolean;

  @Metadata({ data: "json, name=pausing" })
  pausing?: boolean;

  @Metadata({ data: "json, name=resuming" })
  resuming?: boolean;

  @Metadata({ data: "json, name=seeking" })
  seeking?: boolean;

  @Metadata({ data: "json, name=skipping_next" })
  skippingNext?: boolean;

  @Metadata({ data: "json, name=skipping_prev" })
  skippingPrev?: boolean;

  @Metadata({ data: "json, name=toggling_repeat_context" })
  togglingRepeatContext?: boolean;

  @Metadata({ data: "json, name=toggling_repeat_track" })
  togglingRepeatTrack?: boolean;

  @Metadata({ data: "json, name=toggling_shuffle" })
  togglingShuffle?: boolean;

  @Metadata({ data: "json, name=transferring_playback" })
  transferringPlayback?: boolean;
}
