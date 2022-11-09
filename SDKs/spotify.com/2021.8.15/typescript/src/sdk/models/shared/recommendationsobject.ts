import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RecommendationSeedObject } from "./recommendationseedobject";
import { TrackObject } from "./trackobject";


// RecommendationsObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-recommendationsobject - Find more info on the official Spotify Web API Reference
**/
export class RecommendationsObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=seeds", elemType: shared.RecommendationSeedObject })
  seeds?: RecommendationSeedObject[];

  @Metadata({ data: "json, name=tracks", elemType: shared.TrackObject })
  tracks?: TrackObject[];
}
