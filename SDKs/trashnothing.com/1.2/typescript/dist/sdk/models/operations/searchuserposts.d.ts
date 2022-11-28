import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchUserPostsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class SearchUserPostsQueryParams extends SpeakeasyBase {
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
}
export declare class SearchUserPostsSecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class SearchUserPosts200ApplicationJson extends SpeakeasyBase {
    endIndex?: number;
    groupIds?: string[];
    numPages?: number;
    numPosts?: number;
    page?: number;
    perPage?: number;
    posts?: shared.PostSearchResult[];
    startIndex?: number;
}
export declare class SearchUserPostsRequest extends SpeakeasyBase {
    pathParams: SearchUserPostsPathParams;
    queryParams: SearchUserPostsQueryParams;
    security: SearchUserPostsSecurity;
}
export declare class SearchUserPostsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchUserPosts200ApplicationJsonObject?: SearchUserPosts200ApplicationJson;
}
