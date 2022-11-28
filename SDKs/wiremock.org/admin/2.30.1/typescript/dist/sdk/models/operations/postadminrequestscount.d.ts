import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminRequestsCountRequestBodyBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminRequestsCountRequestBody extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminRequestsCountRequestBodyBasicAuthCredentials;
    bodyPatterns?: Map<string, any>[];
    cookies?: Map<string, any>;
    headers?: Map<string, any>;
    method?: string;
    queryParameters?: Map<string, any>;
    url?: string;
    urlPath?: string;
    urlPathPattern?: string;
    urlPattern?: string;
}
export declare class PostAdminRequestsCount200ApplicationJson extends SpeakeasyBase {
    count?: number;
}
export declare class PostAdminRequestsCountRequest extends SpeakeasyBase {
    request: PostAdminRequestsCountRequestBody;
}
export declare class PostAdminRequestsCountResponse extends SpeakeasyBase {
    contentType: string;
    postAdminRequestsCount200ApplicationJsonObject?: PostAdminRequestsCount200ApplicationJson;
    statusCode: number;
}
