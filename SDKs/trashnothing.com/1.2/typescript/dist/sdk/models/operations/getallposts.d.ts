import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllPostsQueryParams extends SpeakeasyBase {
    dateMax: Date;
    dateMin: Date;
    devicePixelRatio?: number;
    page?: number;
    perPage?: number;
    types: string;
}
export declare class GetAllPostsSecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetAllPosts200ApplicationJson extends SpeakeasyBase {
    posts?: shared.Post[];
}
export declare class GetAllPostsRequest extends SpeakeasyBase {
    queryParams: GetAllPostsQueryParams;
    security: GetAllPostsSecurity;
}
export declare class GetAllPostsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAllPosts200ApplicationJsonObject?: GetAllPosts200ApplicationJson;
}
