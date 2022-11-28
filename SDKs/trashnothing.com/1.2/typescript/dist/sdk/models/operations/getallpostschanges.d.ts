import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllPostsChangesQueryParams extends SpeakeasyBase {
    dateMax: Date;
    dateMin: Date;
    page?: number;
    perPage?: number;
}
export declare class GetAllPostsChangesSecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetAllPostsChanges200ApplicationJsonChanges extends SpeakeasyBase {
    date?: Date;
    postId?: string;
    type?: string;
}
export declare class GetAllPostsChanges200ApplicationJson extends SpeakeasyBase {
    changes?: GetAllPostsChanges200ApplicationJsonChanges[];
}
export declare class GetAllPostsChangesRequest extends SpeakeasyBase {
    queryParams: GetAllPostsChangesQueryParams;
    security: GetAllPostsChangesSecurity;
}
export declare class GetAllPostsChangesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAllPostsChanges200ApplicationJsonObject?: GetAllPostsChanges200ApplicationJson;
}
