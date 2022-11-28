import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointToggleShuffleForUsersPlaybackQueryParams extends SpeakeasyBase {
    deviceId?: string;
    state: boolean;
}
export declare class EndpointToggleShuffleForUsersPlaybackHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointToggleShuffleForUsersPlaybackSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointToggleShuffleForUsersPlaybackRequest extends SpeakeasyBase {
    queryParams: EndpointToggleShuffleForUsersPlaybackQueryParams;
    headers: EndpointToggleShuffleForUsersPlaybackHeaders;
    security: EndpointToggleShuffleForUsersPlaybackSecurity;
}
export declare class EndpointToggleShuffleForUsersPlaybackResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
