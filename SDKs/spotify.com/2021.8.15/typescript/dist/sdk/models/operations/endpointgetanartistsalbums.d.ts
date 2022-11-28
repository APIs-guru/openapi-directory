import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetAnArtistsAlbumsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EndpointGetAnArtistsAlbumsQueryParams extends SpeakeasyBase {
    includeGroups?: string;
    limit?: number;
    market?: string;
    offset?: number;
}
export declare class EndpointGetAnArtistsAlbumsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetAnArtistsAlbumsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
/**
 * https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
**/
export declare class EndpointGetAnArtistsAlbums200ApplicationJson extends SpeakeasyBase {
    href?: string;
    items?: shared.SimplifiedAlbumObject[];
    limit?: number;
    next?: string;
    offset?: number;
    previous?: string;
    total?: number;
}
export declare class EndpointGetAnArtistsAlbumsRequest extends SpeakeasyBase {
    pathParams: EndpointGetAnArtistsAlbumsPathParams;
    queryParams: EndpointGetAnArtistsAlbumsQueryParams;
    headers: EndpointGetAnArtistsAlbumsHeaders;
    security: EndpointGetAnArtistsAlbumsSecurity;
}
export declare class EndpointGetAnArtistsAlbumsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointGetAnArtistsAlbums200ApplicationJsonObject?: EndpointGetAnArtistsAlbums200ApplicationJson;
}
