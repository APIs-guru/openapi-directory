import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAnArtistsTopTracksPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EndpointGetAnArtistsTopTracksQueryParams extends SpeakeasyBase {
    market: string;
}
export declare class EndpointGetAnArtistsTopTracksHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAnArtistsTopTracksSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetAnArtistsTopTracksRequest extends SpeakeasyBase {
    pathParams: EndpointGetAnArtistsTopTracksPathParams;
    queryParams: EndpointGetAnArtistsTopTracksQueryParams;
    headers: EndpointGetAnArtistsTopTracksHeaders;
    security: EndpointGetAnArtistsTopTracksSecurity;
}
export declare class EndpointGetAnArtistsTopTracksResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    tracksObject?: shared.TracksObject;
}
