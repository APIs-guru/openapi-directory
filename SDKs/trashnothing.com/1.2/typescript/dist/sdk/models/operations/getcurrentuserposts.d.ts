import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCurrentUserPostsQueryParams extends SpeakeasyBase {
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
    sortBy?: string;
    sources: string;
    types: string;
    userState?: string;
}
export declare class GetCurrentUserPosts200ApplicationJson extends SpeakeasyBase {
    endIndex?: number;
    groupIds?: string[];
    lastListingsView?: Date;
    numPages?: number;
    numPosts?: number;
    page?: number;
    perPage?: number;
    posts?: shared.Post[];
    startIndex?: number;
}
export declare class GetCurrentUserPostsRequest extends SpeakeasyBase {
    queryParams: GetCurrentUserPostsQueryParams;
}
export declare class GetCurrentUserPostsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getCurrentUserPosts200ApplicationJsonObject?: GetCurrentUserPosts200ApplicationJson;
}
