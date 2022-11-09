import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PostAdminMappingsRequestBodyRequestBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminMappingsRequestBodyRequestBasicAuthCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminMappingsRequestBodyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminMappingsRequestBodyRequestBasicAuthCredentials;

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

export enum PostAdminMappingsRequestBodyResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER"
,    EmptyResponse = "EMPTY_RESPONSE"
,    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK"
,    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}


export class PostAdminMappingsRequestBodyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalProxyRequestHeaders" })
  additionalProxyRequestHeaders?: Map<string, any>;

  @Metadata({ data: "json, name=base64Body" })
  base64Body?: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=bodyFileName" })
  bodyFileName?: string;

  @Metadata({ data: "json, name=fault" })
  fault?: PostAdminMappingsRequestBodyResponseFaultEnum;

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


export class PostAdminMappingsRequestBody extends SpeakeasyBase {
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
  request?: PostAdminMappingsRequestBodyRequest;

  @Metadata({ data: "json, name=requiredScenarioState" })
  requiredScenarioState?: string;

  @Metadata({ data: "json, name=response" })
  response?: PostAdminMappingsRequestBodyResponse;

  @Metadata({ data: "json, name=scenarioName" })
  scenarioName?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class PostAdminMappingsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PostAdminMappingsRequestBody;
}


// PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminMappings201ApplicationJsonRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminMappings201ApplicationJsonRequestBasicAuthCredentials;

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

export enum PostAdminMappings201ApplicationJsonResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER"
,    EmptyResponse = "EMPTY_RESPONSE"
,    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK"
,    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}


export class PostAdminMappings201ApplicationJsonResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalProxyRequestHeaders" })
  additionalProxyRequestHeaders?: Map<string, any>;

  @Metadata({ data: "json, name=base64Body" })
  base64Body?: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=bodyFileName" })
  bodyFileName?: string;

  @Metadata({ data: "json, name=fault" })
  fault?: PostAdminMappings201ApplicationJsonResponseFaultEnum;

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


export class PostAdminMappings201ApplicationJson extends SpeakeasyBase {
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
  request?: PostAdminMappings201ApplicationJsonRequest;

  @Metadata({ data: "json, name=requiredScenarioState" })
  requiredScenarioState?: string;

  @Metadata({ data: "json, name=response" })
  response?: PostAdminMappings201ApplicationJsonResponse;

  @Metadata({ data: "json, name=scenarioName" })
  scenarioName?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class PostAdminMappingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAdminMappings201ApplicationJsonObject?: PostAdminMappings201ApplicationJson;

  @Metadata()
  statusCode: number;
}
