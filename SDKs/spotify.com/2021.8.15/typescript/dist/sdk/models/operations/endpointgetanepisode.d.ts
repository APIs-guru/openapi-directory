import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAnEpisodePathParams extends SpeakeasyBase {
    id: string;
}
export declare class EndpointGetAnEpisodeQueryParams extends SpeakeasyBase {
    market?: string;
}
export declare class EndpointGetAnEpisodeHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAnEpisodeSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetAnEpisodeRequest extends SpeakeasyBase {
    pathParams: EndpointGetAnEpisodePathParams;
    queryParams: EndpointGetAnEpisodeQueryParams;
    headers: EndpointGetAnEpisodeHeaders;
    security: EndpointGetAnEpisodeSecurity;
}
export declare class EndpointGetAnEpisodeResponse extends SpeakeasyBase {
    contentType: string;
    episodeObject?: shared.EpisodeObject;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
