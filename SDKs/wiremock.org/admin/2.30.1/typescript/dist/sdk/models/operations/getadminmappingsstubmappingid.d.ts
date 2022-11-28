import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAdminMappingsStubMappingIdPathParams extends SpeakeasyBase {
    stubMappingId: string;
}
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class GetAdminMappingsStubMappingId200ApplicationJsonRequest extends SpeakeasyBase {
    basicAuthCredentials?: GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials;
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
export declare enum GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class GetAdminMappingsStubMappingId200ApplicationJsonResponse extends SpeakeasyBase {
    additionalProxyRequestHeaders?: Map<string, any>;
    base64Body?: string;
    body?: string;
    bodyFileName?: string;
    fault?: GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum;
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
export declare class GetAdminMappingsStubMappingId200ApplicationJson extends SpeakeasyBase {
    id?: string;
    metadata?: Map<string, any>;
    name?: string;
    newScenarioState?: string;
    persistent?: boolean;
    postServeActions?: Map<string, any>;
    priority?: number;
    request?: GetAdminMappingsStubMappingId200ApplicationJsonRequest;
    requiredScenarioState?: string;
    response?: GetAdminMappingsStubMappingId200ApplicationJsonResponse;
    scenarioName?: string;
    uuid?: string;
}
export declare class GetAdminMappingsStubMappingIdRequest extends SpeakeasyBase {
    pathParams: GetAdminMappingsStubMappingIdPathParams;
}
export declare class GetAdminMappingsStubMappingIdResponse extends SpeakeasyBase {
    contentType: string;
    getAdminMappingsStubMappingId200ApplicationJsonObject?: GetAdminMappingsStubMappingId200ApplicationJson;
    statusCode: number;
}
