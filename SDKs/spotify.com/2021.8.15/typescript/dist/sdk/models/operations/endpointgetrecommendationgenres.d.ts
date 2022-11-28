import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetRecommendationGenresHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetRecommendationGenresSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetRecommendationGenresRequest extends SpeakeasyBase {
    headers: EndpointGetRecommendationGenresHeaders;
    security: EndpointGetRecommendationGenresSecurity;
}
export declare class EndpointGetRecommendationGenresResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    genreSeedsObject?: shared.GenreSeedsObject;
    statusCode: number;
}
