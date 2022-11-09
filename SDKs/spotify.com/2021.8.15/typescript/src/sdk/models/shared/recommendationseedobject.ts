import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RecommendationSeedObject
/** 
 * https://developer.spotify.com/documentation/web-api/reference/#object-recommendationseedobject - Find more info on the official Spotify Web API Reference
**/
export class RecommendationSeedObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=afterFilteringSize" })
  afterFilteringSize?: number;

  @Metadata({ data: "json, name=afterRelinkingSize" })
  afterRelinkingSize?: number;

  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=initialPoolSize" })
  initialPoolSize?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
