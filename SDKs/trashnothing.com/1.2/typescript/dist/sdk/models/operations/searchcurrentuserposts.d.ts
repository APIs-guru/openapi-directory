import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchCurrentUserPostsQueryParams extends SpeakeasyBase {
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
export declare class SearchCurrentUserPosts200ApplicationJson extends SpeakeasyBase {
    endIndex?: number;
    groupIds?: string[];
    numPages?: number;
    numPosts?: number;
    page?: number;
    perPage?: number;
    posts?: shared.PostSearchResult[];
    startIndex?: number;
}
export declare class SearchCurrentUserPostsRequest extends SpeakeasyBase {
    queryParams: SearchCurrentUserPostsQueryParams;
}
export declare class SearchCurrentUserPostsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    searchCurrentUserPosts200ApplicationJsonObject?: SearchCurrentUserPosts200ApplicationJson;
}
