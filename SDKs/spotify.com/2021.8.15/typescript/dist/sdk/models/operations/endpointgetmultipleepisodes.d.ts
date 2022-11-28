import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetMultipleEpisodesQueryParams extends SpeakeasyBase {
    ids: string;
    market?: string;
}
export declare class EndpointGetMultipleEpisodesHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetMultipleEpisodesSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetMultipleEpisodesRequest extends SpeakeasyBase {
    queryParams: EndpointGetMultipleEpisodesQueryParams;
    headers: EndpointGetMultipleEpisodesHeaders;
    security: EndpointGetMultipleEpisodesSecurity;
}
export declare class EndpointGetMultipleEpisodesResponse extends SpeakeasyBase {
    contentType: string;
    episodesObject?: shared.EpisodesObject;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
