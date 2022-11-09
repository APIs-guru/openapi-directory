import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrackObject } from "./trackobject";


// SavedTrackObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-savedtrackobject - Find more info on the official Spotify Web API Reference
**/
export class SavedTrackObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=added_at" })
  addedAt?: Date;

  @Metadata({ data: "json, name=track" })
  track?: TrackObject;
}
