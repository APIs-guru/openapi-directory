import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdminRecordingsSnapshotRequestBodyCaptureHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseInsensitive" })
  caseInsensitive?: boolean;
}


// PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria
/** 
 * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
**/
export class PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=binarySizeThreshold" })
  binarySizeThreshold?: string;

  @Metadata({ data: "json, name=textSizeThreshold" })
  textSizeThreshold?: string;
}


// PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminRecordingsSnapshotRequestBodyFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials;

  @Metadata({ data: "json, name=bodyPatterns" })
  bodyPatterns?: Map<string, any>[];

  @Metadata({ data: "json, name=cookies" })
  cookies?: Map<string, any>;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

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


export class PostAdminRecordingsSnapshotRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=captureHeaders", elemType: operations.PostAdminRecordingsSnapshotRequestBodyCaptureHeaders })
  captureHeaders?: Map<string, PostAdminRecordingsSnapshotRequestBodyCaptureHeaders>;

  @Metadata({ data: "json, name=extractBodyCriteria" })
  extractBodyCriteria?: PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria;

  @Metadata({ data: "json, name=filters" })
  filters?: PostAdminRecordingsSnapshotRequestBodyFilters;

  @Metadata({ data: "json, name=persist" })
  persist?: boolean;

  @Metadata({ data: "json, name=repeatsAsScenarios" })
  repeatsAsScenarios?: boolean;

  @Metadata({ data: "json, name=requestBodyPattern" })
  requestBodyPattern?: Map<string, any>;

  @Metadata({ data: "json, name=transformerParameters" })
  transformerParameters?: Map<string, any>;

  @Metadata({ data: "json, name=transformers" })
  transformers?: string[];
}


export class PostAdminRecordingsSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAdminRecordingsSnapshotRequestBody;
}


// PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials;

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

export enum PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER"
,    EmptyResponse = "EMPTY_RESPONSE"
,    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK"
,    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}


export class PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalProxyRequestHeaders" })
  additionalProxyRequestHeaders?: Map<string, any>;

  @Metadata({ data: "json, name=base64Body" })
  base64Body?: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=bodyFileName" })
  bodyFileName?: string;

  @Metadata({ data: "json, name=fault" })
  fault?: PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum;

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


export class PostAdminRecordingsSnapshot200ApplicationJsonMappings extends SpeakeasyBase {
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
  request?: PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest;

  @Metadata({ data: "json, name=requiredScenarioState" })
  requiredScenarioState?: string;

  @Metadata({ data: "json, name=response" })
  response?: PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse;

  @Metadata({ data: "json, name=scenarioName" })
  scenarioName?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class PostAdminRecordingsSnapshot200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class PostAdminRecordingsSnapshot200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=mappings", elemType: operations.PostAdminRecordingsSnapshot200ApplicationJsonMappings })
  mappings?: PostAdminRecordingsSnapshot200ApplicationJsonMappings[];

  @Metadata({ data: "json, name=meta" })
  meta?: PostAdminRecordingsSnapshot200ApplicationJsonMeta;
}


export class PostAdminRecordingsSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAdminRecordingsSnapshot200ApplicationJsonObject?: PostAdminRecordingsSnapshot200ApplicationJson;

  @Metadata()
  statusCode: number;
}
