import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetMultipleArtistsQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointGetMultipleArtistsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetMultipleArtistsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetMultipleArtistsRequest extends SpeakeasyBase {
    queryParams: EndpointGetMultipleArtistsQueryParams;
    headers: EndpointGetMultipleArtistsHeaders;
    security: EndpointGetMultipleArtistsSecurity;
}
export declare class EndpointGetMultipleArtistsResponse extends SpeakeasyBase {
    artistsObject?: shared.ArtistsObject;
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
}
