import { SpeakeasyBase } from "../../../internal/utils";
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-recommendationseedobject - Find more info on the official Spotify Web API Reference
**/
export declare class RecommendationSeedObject extends SpeakeasyBase {
    afterFilteringSize?: number;
    afterRelinkingSize?: number;
    href?: string;
    id?: string;
    initialPoolSize?: number;
    type?: string;
}
