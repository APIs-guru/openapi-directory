import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSavedQuerySecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostSavedQuery201ApplicationJson extends SpeakeasyBase {
    id?: string;
    result?: shared.SavedQueryRestApiPost;
}
export declare class PostSavedQuery400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSavedQuery401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSavedQuery422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSavedQuery500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostSavedQueryRequest extends SpeakeasyBase {
    request: shared.SavedQueryRestApiPost;
    security: PostSavedQuerySecurity;
}
export declare class PostSavedQueryResponse extends SpeakeasyBase {
    contentType: string;
    postSavedQuery201ApplicationJsonObject?: PostSavedQuery201ApplicationJson;
    postSavedQuery400ApplicationJsonObject?: PostSavedQuery400ApplicationJson;
    postSavedQuery401ApplicationJsonObject?: PostSavedQuery401ApplicationJson;
    postSavedQuery422ApplicationJsonObject?: PostSavedQuery422ApplicationJson;
    postSavedQuery500ApplicationJsonObject?: PostSavedQuery500ApplicationJson;
    statusCode: number;
}
