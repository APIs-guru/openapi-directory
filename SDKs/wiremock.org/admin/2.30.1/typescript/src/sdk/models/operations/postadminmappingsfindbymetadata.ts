import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdminMappingsFindByMetadataRequestBodyStringEquals extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseInsensitive" })
  caseInsensitive?: boolean;

  @Metadata({ data: "json, name=equalTo" })
  equalTo: boolean;
}


export class PostAdminMappingsFindByMetadataRequestBodyStringContains extends SpeakeasyBase {
  @Metadata({ data: "json, name=contains" })
  contains: string;
}


export class PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=matches" })
  matches: string;
}


export class PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=doesNotMatch" })
  doesNotMatch: string;
}


export class PostAdminMappingsFindByMetadataRequestBodyJsonEquals extends SpeakeasyBase {
  @Metadata({ data: "json, name=equalToJson" })
  equalToJson: string;
}


export class PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=ignoreArrayOrder" })
  ignoreArrayOrder?: boolean;

  @Metadata({ data: "json, name=ignoreExtraElements" })
  ignoreExtraElements?: boolean;

  @Metadata({ data: "json, name=matchesJsonPath" })
  matchesJsonPath: string;
}


export class PostAdminMappingsFindByMetadataRequestBodyXmlEquality extends SpeakeasyBase {
  @Metadata({ data: "json, name=equalToXml" })
  equalToXml: string;
}


export class PostAdminMappingsFindByMetadataRequestBodyXPathMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchesXpath" })
  matchesXpath: string;

  @Metadata({ data: "json, name=namespaces" })
  namespaces?: Map<string, any>;

  @Metadata({ data: "json, name=valuePattern" })
  valuePattern?: Map<string, any>;
}


export class PostAdminMappingsFindByMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


// PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequestBasicAuthCredentials;

  @Metadata({ data: "json, name=bodyPatterns" })
  bodyPatterns?: Map<string, any>[];

  @Metadata({ data: "json, name=cookies" })
  cookies?: Map<string, any>;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=queryParameters" })
  queryParameters?: Map<string, any>;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=urlPath" })
  urlPath?: string;

  @Metadata({ data: "json, name=urlPathPattern" })
  urlPathPattern?: string;

  @Metadata({ data: "json, name=urlPattern" })
  urlPattern?: string;
}

export enum PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER"
,    EmptyResponse = "EMPTY_RESPONSE"
,    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK"
,    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}


export class PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalProxyRequestHeaders" })
  additionalProxyRequestHeaders?: Map<string, any>;

  @Metadata({ data: "json, name=base64Body" })
  base64Body?: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=bodyFileName" })
  bodyFileName?: string;

  @Metadata({ data: "json, name=fault" })
  fault?: PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponseFaultEnum;

  @Metadata({ data: "json, name=fixedDelayMilliseconds" })
  fixedDelayMilliseconds?: number;

  @Metadata({ data: "json, name=fromConfiguredStub" })
  fromConfiguredStub?: boolean;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @Metadata({ data: "json, name=jsonBody" })
  jsonBody?: Map<string, any>;

  @Metadata({ data: "json, name=proxyBaseUrl" })
  proxyBaseUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=transformerParameters" })
  transformerParameters?: Map<string, any>;

  @Metadata({ data: "json, name=transformers" })
  transformers?: string[];
}


export class PostAdminMappingsFindByMetadata200ApplicationJsonMappings extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=newScenarioState" })
  newScenarioState?: string;

  @Metadata({ data: "json, name=persistent" })
  persistent?: boolean;

  @Metadata({ data: "json, name=postServeActions" })
  postServeActions?: Map<string, any>;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=request" })
  request?: PostAdminMappingsFindByMetadata200ApplicationJsonMappingsRequest;

  @Metadata({ data: "json, name=requiredScenarioState" })
  requiredScenarioState?: string;

  @Metadata({ data: "json, name=response" })
  response?: PostAdminMappingsFindByMetadata200ApplicationJsonMappingsResponse;

  @Metadata({ data: "json, name=scenarioName" })
  scenarioName?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class PostAdminMappingsFindByMetadata200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class PostAdminMappingsFindByMetadata200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=mappings", elemType: operations.PostAdminMappingsFindByMetadata200ApplicationJsonMappings })
  mappings?: PostAdminMappingsFindByMetadata200ApplicationJsonMappings[];

  @Metadata({ data: "json, name=meta" })
  meta?: PostAdminMappingsFindByMetadata200ApplicationJsonMeta;
}


export class PostAdminMappingsFindByMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAdminMappingsFindByMetadata200ApplicationJsonObject?: PostAdminMappingsFindByMetadata200ApplicationJson;

  @Metadata()
  statusCode: number;
}
