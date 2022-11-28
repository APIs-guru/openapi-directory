import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchGroupsQueryParams extends SpeakeasyBase {
    country?: string;
    distance?: number;
    latitude?: number;
    longitude?: number;
    name?: string;
    page?: number;
    perPage?: number;
    postalCode?: string;
    region?: string;
}
export declare class SearchGroupsSecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class SearchGroups200ApplicationJson extends SpeakeasyBase {
    endIndex?: number;
    groups?: shared.Group[];
    numGroups?: number;
    numPages?: number;
    page?: number;
    perPage?: number;
    startIndex?: number;
}
export declare class SearchGroupsRequest extends SpeakeasyBase {
    queryParams: SearchGroupsQueryParams;
    security: SearchGroupsSecurity;
}
export declare class SearchGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchGroups200ApplicationJsonObject?: SearchGroups200ApplicationJson;
}
