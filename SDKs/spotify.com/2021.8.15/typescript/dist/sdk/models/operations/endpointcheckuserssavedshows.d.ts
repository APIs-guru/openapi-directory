import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointCheckUsersSavedShowsQueryParams extends SpeakeasyBase {
    ids: string;
}
export declare class EndpointCheckUsersSavedShowsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointCheckUsersSavedShowsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointCheckUsersSavedShowsRequest extends SpeakeasyBase {
    queryParams: EndpointCheckUsersSavedShowsQueryParams;
    headers: EndpointCheckUsersSavedShowsHeaders;
    security: EndpointCheckUsersSavedShowsSecurity;
}
export declare class EndpointCheckUsersSavedShowsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    statusCode: number;
    endpointCheckUsersSavedShows200ApplicationJsonBooleans?: boolean[];
}
