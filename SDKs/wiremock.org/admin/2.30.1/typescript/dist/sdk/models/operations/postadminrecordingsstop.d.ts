import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminRecordingsStop200ApplicationJsonMappingsRequest extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminRecordingsStop200ApplicationJsonMappingsRequestBasicAuthCredentials;
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
export declare enum PostAdminRecordingsStop200ApplicationJsonMappingsResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class PostAdminRecordingsStop200ApplicationJsonMappingsResponse extends SpeakeasyBase {
    additionalProxyRequestHeaders?: Map<string, any>;
    base64Body?: string;
    body?: string;
    bodyFileName?: string;
    fault?: PostAdminRecordingsStop200ApplicationJsonMappingsResponseFaultEnum;
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
export declare class PostAdminRecordingsStop200ApplicationJsonMappings extends SpeakeasyBase {
    id?: string;
    metadata?: Map<string, any>;
    name?: string;
    newScenarioState?: string;
    persistent?: boolean;
    postServeActions?: Map<string, any>;
    priority?: number;
    request?: PostAdminRecordingsStop200ApplicationJsonMappingsRequest;
    requiredScenarioState?: string;
    response?: PostAdminRecordingsStop200ApplicationJsonMappingsResponse;
    scenarioName?: string;
    uuid?: string;
}
export declare class PostAdminRecordingsStop200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class PostAdminRecordingsStop200ApplicationJson extends SpeakeasyBase {
    mappings?: PostAdminRecordingsStop200ApplicationJsonMappings[];
    meta?: PostAdminRecordingsStop200ApplicationJsonMeta;
}
export declare class PostAdminRecordingsStopResponse extends SpeakeasyBase {
    contentType: string;
    postAdminRecordingsStop200ApplicationJsonObject?: PostAdminRecordingsStop200ApplicationJson;
    statusCode: number;
}
