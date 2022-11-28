import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAnArtistsRelatedArtistsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EndpointGetAnArtistsRelatedArtistsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAnArtistsRelatedArtistsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetAnArtistsRelatedArtistsRequest extends SpeakeasyBase {
    pathParams: EndpointGetAnArtistsRelatedArtistsPathParams;
    headers: EndpointGetAnArtistsRelatedArtistsHeaders;
    security: EndpointGetAnArtistsRelatedArtistsSecurity;
}
export declare class EndpointGetAnArtistsRelatedArtistsResponse extends SpeakeasyBase {
    artistsObject?: shared.ArtistsObject;
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
