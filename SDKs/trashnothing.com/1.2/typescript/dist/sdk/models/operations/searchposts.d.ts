import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchPostsQueryParams extends SpeakeasyBase {
    dateMax?: Date;
    dateMin?: Date;
    devicePixelRatio?: number;
    groupIds?: string;
    latitude?: number;
    longitude?: number;
    outcomes?: string;
    page?: number;
    perPage?: number;
    radius?: number;
    search: string;
    sortBy?: string;
    sources: string;
    types: string;
    userState?: string;
}
export declare class SearchPostsSecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class SearchPosts200ApplicationJson extends SpeakeasyBase {
    endIndex?: number;
    groupIds?: string[];
    numPages?: number;
    numPosts?: number;
    page?: number;
    perPage?: number;
    posts?: shared.PostSearchResult[];
    startIndex?: number;
}
export declare class SearchPostsRequest extends SpeakeasyBase {
    queryParams: SearchPostsQueryParams;
    security: SearchPostsSecurity;
}
export declare class SearchPostsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchPosts200ApplicationJsonObject?: SearchPosts200ApplicationJson;
}
