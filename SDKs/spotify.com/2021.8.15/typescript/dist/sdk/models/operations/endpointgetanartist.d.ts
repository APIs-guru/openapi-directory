import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAnArtistPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EndpointGetAnArtistHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAnArtistSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetAnArtistRequest extends SpeakeasyBase {
    pathParams: EndpointGetAnArtistPathParams;
    headers: EndpointGetAnArtistHeaders;
    security: EndpointGetAnArtistSecurity;
}
export declare class EndpointGetAnArtistResponse extends SpeakeasyBase {
    artistObject?: shared.ArtistObject;
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
