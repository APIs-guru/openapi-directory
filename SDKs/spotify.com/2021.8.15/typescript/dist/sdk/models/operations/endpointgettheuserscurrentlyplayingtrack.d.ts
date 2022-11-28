import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetTheUsersCurrentlyPlayingTrackQueryParams extends SpeakeasyBase {
    additionalTypes?: string;
    market: string;
}
export declare class EndpointGetTheUsersCurrentlyPlayingTrackHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetTheUsersCurrentlyPlayingTrackSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetTheUsersCurrentlyPlayingTrackRequest extends SpeakeasyBase {
    queryParams: EndpointGetTheUsersCurrentlyPlayingTrackQueryParams;
    headers: EndpointGetTheUsersCurrentlyPlayingTrackHeaders;
    security: EndpointGetTheUsersCurrentlyPlayingTrackSecurity;
}
export declare class EndpointGetTheUsersCurrentlyPlayingTrackResponse extends SpeakeasyBase {
    contentType: string;
    currentlyPlayingObject?: shared.CurrentlyPlayingObject;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
