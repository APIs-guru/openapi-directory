import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminRequestsRemoveRequestBodyBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminRequestsRemoveRequestBody extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminRequestsRemoveRequestBodyBasicAuthCredentials;
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
export declare class PostAdminRequestsRemoveRequest extends SpeakeasyBase {
    request: PostAdminRequestsRemoveRequestBody;
}
export declare class PostAdminRequestsRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
