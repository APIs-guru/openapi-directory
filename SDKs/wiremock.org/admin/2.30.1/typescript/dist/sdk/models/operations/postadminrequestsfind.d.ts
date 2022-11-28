import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminRequestsFindRequestBodyBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminRequestsFindRequestBody extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminRequestsFindRequestBodyBasicAuthCredentials;
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
export declare class PostAdminRequestsFindRequest extends SpeakeasyBase {
    request: PostAdminRequestsFindRequestBody;
}
export declare class PostAdminRequestsFindResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
