import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAdminMappingsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetAdminMappings200ApplicationJsonMappingsRequest extends SpeakeasyBase {
    basicAuthCredentials?: GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials;
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
export declare enum GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class GetAdminMappings200ApplicationJsonMappingsResponse extends SpeakeasyBase {
    additionalProxyRequestHeaders?: Map<string, any>;
    base64Body?: string;
    body?: string;
    bodyFileName?: string;
    fault?: GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum;
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
export declare class GetAdminMappings200ApplicationJsonMappings extends SpeakeasyBase {
    id?: string;
    metadata?: Map<string, any>;
    name?: string;
    newScenarioState?: string;
    persistent?: boolean;
    postServeActions?: Map<string, any>;
    priority?: number;
    request?: GetAdminMappings200ApplicationJsonMappingsRequest;
    requiredScenarioState?: string;
    response?: GetAdminMappings200ApplicationJsonMappingsResponse;
    scenarioName?: string;
    uuid?: string;
}
export declare class GetAdminMappings200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class GetAdminMappings200ApplicationJson extends SpeakeasyBase {
    mappings?: GetAdminMappings200ApplicationJsonMappings[];
    meta?: GetAdminMappings200ApplicationJsonMeta;
}
export declare class GetAdminMappingsRequest extends SpeakeasyBase {
    queryParams: GetAdminMappingsQueryParams;
}
export declare class GetAdminMappingsResponse extends SpeakeasyBase {
    contentType: string;
    getAdminMappings200ApplicationJsonObject?: GetAdminMappings200ApplicationJson;
    statusCode: number;
}
