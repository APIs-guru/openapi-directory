import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSeedObject } from "./recommendationseedobject";
import { TrackObject } from "./trackobject";



// RecommendationsObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-recommendationsobject - Find more info on the official Spotify Web API Reference
**/
export class RecommendationsObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=seeds", elemType: RecommendationSeedObject })
  seeds?: RecommendationSeedObject[];

  @SpeakeasyMetadata({ data: "json, name=tracks", elemType: TrackObject })
  tracks?: TrackObject[];
}
