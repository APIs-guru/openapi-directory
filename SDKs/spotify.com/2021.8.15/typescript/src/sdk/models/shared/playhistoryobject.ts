import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContextObject } from "./contextobject";
import { SimplifiedTrackObject } from "./simplifiedtrackobject";


// PlayHistoryObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-playhistoryobject - Find more info on the official Spotify Web API Reference
**/
export class PlayHistoryObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: ContextObject;

  @Metadata({ data: "json, name=played_at" })
  playedAt?: Date;

  @Metadata({ data: "json, name=track" })
  track?: SimplifiedTrackObject;
}
