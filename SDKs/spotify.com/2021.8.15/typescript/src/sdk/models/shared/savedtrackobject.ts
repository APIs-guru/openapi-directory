import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackObject } from "./trackobject";



// SavedTrackObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-savedtrackobject - Find more info on the official Spotify Web API Reference
**/
export class SavedTrackObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=added_at" })
  addedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=track" })
  track?: TrackObject;
}
