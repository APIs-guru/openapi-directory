import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecommendationSeedObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-recommendationseedobject - Find more info on the official Spotify Web API Reference
**/
export class RecommendationSeedObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=afterFilteringSize" })
  afterFilteringSize?: number;

  @SpeakeasyMetadata({ data: "json, name=afterRelinkingSize" })
  afterRelinkingSize?: number;

  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=initialPoolSize" })
  initialPoolSize?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
