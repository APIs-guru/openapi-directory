import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPostsQueryParams extends SpeakeasyBase {
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
export declare class GetPostsSecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetPosts200ApplicationJson extends SpeakeasyBase {
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
export declare class GetPostsRequest extends SpeakeasyBase {
    queryParams: GetPostsQueryParams;
    security: GetPostsSecurity;
}
export declare class GetPostsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPosts200ApplicationJsonObject?: GetPosts200ApplicationJson;
}
