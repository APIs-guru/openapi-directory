import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams extends SpeakeasyBase {
    additionalTypes?: string;
    market?: string;
}
export declare class EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetInformationAboutTheUsersCurrentPlaybackRequest extends SpeakeasyBase {
    queryParams: EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams;
    headers: EndpointGetInformationAboutTheUsersCurrentPlaybackHeaders;
    security: EndpointGetInformationAboutTheUsersCurrentPlaybackSecurity;
}
export declare class EndpointGetInformationAboutTheUsersCurrentPlaybackResponse extends SpeakeasyBase {
    contentType: string;
    currentlyPlayingContextObject?: shared.CurrentlyPlayingContextObject;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
