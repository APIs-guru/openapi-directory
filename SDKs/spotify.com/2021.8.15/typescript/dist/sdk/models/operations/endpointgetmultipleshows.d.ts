import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetMultipleShowsQueryParams extends SpeakeasyBase {
    ids: string;
    market?: string;
}
export declare class EndpointGetMultipleShowsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetMultipleShowsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetMultipleShowsRequest extends SpeakeasyBase {
    queryParams: EndpointGetMultipleShowsQueryParams;
    headers: EndpointGetMultipleShowsHeaders;
    security: EndpointGetMultipleShowsSecurity;
}
export declare class EndpointGetMultipleShowsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    showsObject?: shared.ShowsObject;
    statusCode: number;
}
