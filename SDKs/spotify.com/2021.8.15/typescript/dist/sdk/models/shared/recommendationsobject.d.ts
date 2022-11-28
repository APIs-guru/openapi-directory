import { SpeakeasyBase } from "../../../internal/utils";
import { RecommendationSeedObject } from "./recommendationseedobject";
import { TrackObject } from "./trackobject";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-recommendationsobject - Find more info on the official Spotify Web API Reference
**/
export declare class RecommendationsObject extends SpeakeasyBase {
    seeds?: RecommendationSeedObject[];
    tracks?: TrackObject[];
}
