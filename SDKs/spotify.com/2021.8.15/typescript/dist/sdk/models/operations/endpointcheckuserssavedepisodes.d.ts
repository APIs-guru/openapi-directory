import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointCheckUsersSavedEpisodesQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointCheckUsersSavedEpisodesHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointCheckUsersSavedEpisodesSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointCheckUsersSavedEpisodesRequest extends SpeakeasyBase {
    queryParams: EndpointCheckUsersSavedEpisodesQueryParams;
    headers: EndpointCheckUsersSavedEpisodesHeaders;
    security: EndpointCheckUsersSavedEpisodesSecurity;
}
export declare class EndpointCheckUsersSavedEpisodesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointCheckUsersSavedEpisodes200ApplicationJsonBooleans?: boolean[];
}
