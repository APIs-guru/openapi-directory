import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminMappingsRequestBodyRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminMappingsRequestBodyRequest extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminMappingsRequestBodyRequestBasicAuthCredentials;
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
export declare enum PostAdminMappingsRequestBodyResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class PostAdminMappingsRequestBodyResponse extends SpeakeasyBase {
    additionalProxyRequestHeaders?: Map<string, any>;
    base64Body?: string;
    body?: string;
    bodyFileName?: string;
    fault?: PostAdminMappingsRequestBodyResponseFaultEnum;
    fixedDelayMilliseconds?: number;
    fromConfiguredStub?: boolean;
    headers?: Map<string, any>;
    jsonBody?: Map<string, any>;
    proxyBaseUrl?: string;
    status?: number;
    statusMessage?: string;
    transformerParameters?: Map<string, any>;
    transformers?: string[];
}
export declare class PostAdminMappingsRequestBody extends SpeakeasyBase {
    id?: string;
    metadata?: Map<string, any>;
    name?: string;
    newScenarioState?: string;
    persistent?: boolean;
    postServeActions?: Map<string, any>;
    priority?: number;
    request?: PostAdminMappingsRequestBodyRequest;
    requiredScenarioState?: string;
    response?: PostAdminMappingsRequestBodyResponse;
    scenarioName?: string;
    uuid?: string;
}
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminMappings201ApplicationJsonRequest extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials;
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
export declare enum PostAdminMappings201ApplicationJsonResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class PostAdminMappings201ApplicationJsonResponse extends SpeakeasyBase {
    additionalProxyRequestHeaders?: Map<string, any>;
    base64Body?: string;
    body?: string;
    bodyFileName?: string;
    fault?: PostAdminMappings201ApplicationJsonResponseFaultEnum;
    fixedDelayMilliseconds?: number;
    fromConfiguredStub?: boolean;
    headers?: Map<string, any>;
    jsonBody?: Map<string, any>;
    proxyBaseUrl?: string;
    status?: number;
    statusMessage?: string;
    transformerParameters?: Map<string, any>;
    transformers?: string[];
}
export declare class PostAdminMappings201ApplicationJson extends SpeakeasyBase {
    id?: string;
    metadata?: Map<string, any>;
    name?: string;
    newScenarioState?: string;
    persistent?: boolean;
    postServeActions?: Map<string, any>;
    priority?: number;
    request?: PostAdminMappings201ApplicationJsonRequest;
    requiredScenarioState?: string;
    response?: PostAdminMappings201ApplicationJsonResponse;
    scenarioName?: string;
    uuid?: string;
}
export declare class PostAdminMappingsRequest extends SpeakeasyBase {
    request?: PostAdminMappingsRequestBody;
}
export declare class PostAdminMappingsResponse extends SpeakeasyBase {
    contentType: string;
    postAdminMappings201ApplicationJsonObject?: PostAdminMappings201ApplicationJson;
    statusCode: number;
}
