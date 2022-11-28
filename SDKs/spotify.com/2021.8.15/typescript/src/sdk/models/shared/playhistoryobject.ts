import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContextObject } from "./contextobject";
import { SimplifiedTrackObject } from "./simplifiedtrackobject";



// PlayHistoryObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-playhistoryobject - Find more info on the official Spotify Web API Reference
**/
export class PlayHistoryObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: ContextObject;

  @SpeakeasyMetadata({ data: "json, name=played_at" })
  playedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=track" })
  track?: SimplifiedTrackObject;
}
