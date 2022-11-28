import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAdminMappingsFindByMetadataRequestBodyStringEquals extends SpeakeasyBase {
    caseInsensitive?: boolean;
    equalTo: boolean;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyStringContains extends SpeakeasyBase {
    contains: string;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch extends SpeakeasyBase {
    matches: string;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch extends SpeakeasyBase {
    doesNotMatch: string;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyJsonEquals extends SpeakeasyBase {
    equalToJson: string;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch extends SpeakeasyBase {
    ignoreArrayOrder?: boolean;
    ignoreExtraElements?: boolean;
    matchesJsonPath: string;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyXmlEquality extends SpeakeasyBase {
    equalToXml: string;
}
export declare class PostAdminMappingsFindByMetadataRequestBodyXPathMatch extends SpeakeasyBase {
    matchesXpath: string;
    namespaces?: Map<string, any>;
    valuePattern?: Map<string, any>;
}
/**
 * Pre-emptive basic auth credentials to match against
**/
export declare class PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest extends SpeakeasyBase {
    basicAuthCredentials?: PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials;
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
export declare enum PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}
export declare class PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse extends SpeakeasyBase {
    additionalProxyRequestHeaders?: Map<string, any>;
    base64Body?: string;
    body?: string;
    bodyFileName?: string;
    fault?: PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponseFaultEnum;
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
export declare class PostAdminMappingsFindByMetadata200ApplicationJsonMappings extends SpeakeasyBase {
    id?: string;
    metadata?: Map<string, any>;
    name?: string;
    newScenarioState?: string;
    persistent?: boolean;
    postServeActions?: Map<string, any>;
    priority?: number;
    request?: PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest;
    requiredScenarioState?: string;
    response?: PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse;
    scenarioName?: string;
    uuid?: string;
}
export declare class PostAdminMappingsFindByMetadata200ApplicationJsonMeta extends SpeakeasyBase {
    total: number;
}
export declare class PostAdminMappingsFindByMetadata200ApplicationJson extends SpeakeasyBase {
    mappings?: PostAdminMappingsFindByMetadata200ApplicationJsonMappings[];
    meta?: PostAdminMappingsFindByMetadata200ApplicationJsonMeta;
}
export declare class PostAdminMappingsFindByMetadataRequest extends SpeakeasyBase {
    request: any;
}
export declare class PostAdminMappingsFindByMetadataResponse extends SpeakeasyBase {
    contentType: string;
    postAdminMappingsFindByMetadata200ApplicationJsonObject?: PostAdminMappingsFindByMetadata200ApplicationJson;
    statusCode: number;
}
