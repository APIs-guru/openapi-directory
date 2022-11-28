import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchSearchPathParams extends SpeakeasyBase {
    searchTerm: string;
}
export declare class SearchSearchQueryParams extends SpeakeasyBase {
    devid?: string;
    includeAddresses?: boolean;
    includeOutlets?: boolean;
    latitude?: number;
    longitude?: number;
    matchRouteBySuburb?: boolean;
    matchStopByGtfsStopId?: boolean;
    matchStopBySuburb?: boolean;
    maxDistance?: number;
    routeTypes?: number[];
    signature?: string;
    token?: string;
}
export declare class SearchSearchRequest extends SpeakeasyBase {
    pathParams: SearchSearchPathParams;
    queryParams: SearchSearchQueryParams;
}
export declare class SearchSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    v3ErrorResponse?: shared.V3ErrorResponse;
    v3SearchResult?: shared.V3SearchResult;
}
