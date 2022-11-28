import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetRecommendationGenresHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetRecommendationGenresSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetRecommendationGenresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EndpointGetRecommendationGenresHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetRecommendationGenresSecurity;
}


export class EndpointGetRecommendationGenresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  genreSeedsObject?: shared.GenreSeedsObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
