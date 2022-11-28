import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminNearMissesRequestPatternRequestBody extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials;
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
export declare class PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses extends SpeakeasyBase {
    absoluteUrl?: string;
    body?: string;
    cookies?: Map<string, any>;
    headers?: Map<string, any>;
    method?: string;
    url?: string;
}
export declare class PostAdminNearMissesRequestPattern200ApplicationJson extends SpeakeasyBase {
    nearMisses?: PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses[];
}
export declare class PostAdminNearMissesRequestPatternRequest extends SpeakeasyBase {
    request: PostAdminNearMissesRequestPatternRequestBody;
}
export declare class PostAdminNearMissesRequestPatternResponse extends SpeakeasyBase {
    contentType: string;
    postAdminNearMissesRequestPattern200ApplicationJsonObject?: PostAdminNearMissesRequestPattern200ApplicationJson;
    statusCode: number;
}
