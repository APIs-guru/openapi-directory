import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DisallowsObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-disallowsobject - Find more info on the official Spotify Web API Reference
**/
export class DisallowsObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interrupting_playback" })
  interruptingPlayback?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pausing" })
  pausing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resuming" })
  resuming?: boolean;

  @SpeakeasyMetadata({ data: "json, name=seeking" })
  seeking?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skipping_next" })
  skippingNext?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skipping_prev" })
  skippingPrev?: boolean;

  @SpeakeasyMetadata({ data: "json, name=toggling_repeat_context" })
  togglingRepeatContext?: boolean;

  @SpeakeasyMetadata({ data: "json, name=toggling_repeat_track" })
  togglingRepeatTrack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=toggling_shuffle" })
  togglingShuffle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=transferring_playback" })
  transferringPlayback?: boolean;
}
