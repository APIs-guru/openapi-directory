import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointSearchQueryParams extends SpeakeasyBase {
    includeExternal?: string;
    limit?: number;
    market?: string;
    offset?: number;
    q: string;
    type: string;
}
export declare class EndpointSearchHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointSearchSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointSearchRequest extends SpeakeasyBase {
    queryParams: EndpointSearchQueryParams;
    headers: EndpointSearchHeaders;
    security: EndpointSearchSecurity;
}
export declare class EndpointSearchResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    searchResponseObject?: shared.SearchResponseObject;
    statusCode: number;
}
