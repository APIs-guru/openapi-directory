import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetRecommendationGenresHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetRecommendationGenresSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetRecommendationGenresRequest extends SpeakeasyBase {
  @Metadata()
  headers: EndpointGetRecommendationGenresHeaders;

  @Metadata()
  security: EndpointGetRecommendationGenresSecurity;
}


export class EndpointGetRecommendationGenresResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  genreSeedsObject?: shared.GenreSeedsObject;

  @Metadata()
  statusCode: number;
}
