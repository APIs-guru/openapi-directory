import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserPostsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetUserPostsQueryParams extends SpeakeasyBase {
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
}
export declare class GetUserPostsSecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetUserPosts200ApplicationJson extends SpeakeasyBase {
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
export declare class GetUserPostsRequest extends SpeakeasyBase {
    pathParams: GetUserPostsPathParams;
    queryParams: GetUserPostsQueryParams;
    security: GetUserPostsSecurity;
}
export declare class GetUserPostsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getUserPosts200ApplicationJsonObject?: GetUserPosts200ApplicationJson;
}
