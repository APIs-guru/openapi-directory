import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAdminRecordingsSnapshotRequestBodyCaptureHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseInsensitive" })
  caseInsensitive?: boolean;
}


// PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria
/** 
 * Criteria for extracting response bodies to a separate file instead of including it in the stub mapping
**/
export class PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=binarySizeThreshold" })
  binarySizeThreshold?: string;

  @SpeakeasyMetadata({ data: "json, name=textSizeThreshold" })
  textSizeThreshold?: string;
}


// PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminRecordingsSnapshotRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminRecordingsSnapshotRequestBodyFiltersBasicAuthCredentials;

  @SpeakeasyMetadata({ data: "json, name=bodyPatterns" })
  bodyPatterns?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=cookies" })
  cookies?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=queryParameters" })
  queryParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPath" })
  urlPath?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPathPattern" })
  urlPathPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPattern" })
  urlPattern?: string;
}


export class PostAdminRecordingsSnapshotRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=captureHeaders", elemType: PostAdminRecordingsSnapshotRequestBodyCaptureHeaders })
  captureHeaders?: Map<string, PostAdminRecordingsSnapshotRequestBodyCaptureHeaders>;

  @SpeakeasyMetadata({ data: "json, name=extractBodyCriteria" })
  extractBodyCriteria?: PostAdminRecordingsSnapshotRequestBodyExtractBodyCriteria;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: PostAdminRecordingsSnapshotRequestBodyFilters;

  @SpeakeasyMetadata({ data: "json, name=persist" })
  persist?: boolean;

  @SpeakeasyMetadata({ data: "json, name=repeatsAsScenarios" })
  repeatsAsScenarios?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requestBodyPattern" })
  requestBodyPattern?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=transformerParameters" })
  transformerParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=transformers" })
  transformers?: string[];
}


// PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequestBasicAuthCredentials;

  @SpeakeasyMetadata({ data: "json, name=bodyPatterns" })
  bodyPatterns?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=cookies" })
  cookies?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=queryParameters" })
  queryParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPath" })
  urlPath?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPathPattern" })
  urlPathPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=urlPattern" })
  urlPattern?: string;
}

export enum PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}


export class PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProxyRequestHeaders" })
  additionalProxyRequestHeaders?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=base64Body" })
  base64Body?: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=bodyFileName" })
  bodyFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=fault" })
  fault?: PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponseFaultEnum;

  @SpeakeasyMetadata({ data: "json, name=fixedDelayMilliseconds" })
  fixedDelayMilliseconds?: number;

  @SpeakeasyMetadata({ data: "json, name=fromConfiguredStub" })
  fromConfiguredStub?: boolean;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=jsonBody" })
  jsonBody?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=proxyBaseUrl" })
  proxyBaseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=transformerParameters" })
  transformerParameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=transformers" })
  transformers?: string[];
}


export class PostAdminRecordingsSnapshot200ApplicationJsonMappings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=newScenarioState" })
  newScenarioState?: string;

  @SpeakeasyMetadata({ data: "json, name=persistent" })
  persistent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=postServeActions" })
  postServeActions?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=request" })
  request?: PostAdminRecordingsSnapshot200ApplicationJsonMappingsRequest;

  @SpeakeasyMetadata({ data: "json, name=requiredScenarioState" })
  requiredScenarioState?: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: PostAdminRecordingsSnapshot200ApplicationJsonMappingsResponse;

  @SpeakeasyMetadata({ data: "json, name=scenarioName" })
  scenarioName?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class PostAdminRecordingsSnapshot200ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;
}


export class PostAdminRecordingsSnapshot200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mappings", elemType: PostAdminRecordingsSnapshot200ApplicationJsonMappings })
  mappings?: PostAdminRecordingsSnapshot200ApplicationJsonMappings[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PostAdminRecordingsSnapshot200ApplicationJsonMeta;
}


export class PostAdminRecordingsSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAdminRecordingsSnapshotRequestBody;
}


export class PostAdminRecordingsSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAdminRecordingsSnapshot200ApplicationJsonObject?: PostAdminRecordingsSnapshot200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
