import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutAdminMappingsStubMappingIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stubMappingId" })
  stubMappingId: string;
}


// PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class PutAdminMappingsStubMappingIdRequestBodyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PutAdminMappingsStubMappingIdRequestBodyRequestBasicAuthCredentials;

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

export enum PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}


export class PutAdminMappingsStubMappingIdRequestBodyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProxyRequestHeaders" })
  additionalProxyRequestHeaders?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=base64Body" })
  base64Body?: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=bodyFileName" })
  bodyFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=fault" })
  fault?: PutAdminMappingsStubMappingIdRequestBodyResponseFaultEnum;

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


export class PutAdminMappingsStubMappingIdRequestBody extends SpeakeasyBase {
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
  request?: PutAdminMappingsStubMappingIdRequestBodyRequest;

  @SpeakeasyMetadata({ data: "json, name=requiredScenarioState" })
  requiredScenarioState?: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: PutAdminMappingsStubMappingIdRequestBodyResponse;

  @SpeakeasyMetadata({ data: "json, name=scenarioName" })
  scenarioName?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


// PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class PutAdminMappingsStubMappingId200ApplicationJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PutAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials;

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

export enum PutAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER",
    EmptyResponse = "EMPTY_RESPONSE",
    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK",
    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}


export class PutAdminMappingsStubMappingId200ApplicationJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalProxyRequestHeaders" })
  additionalProxyRequestHeaders?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=base64Body" })
  base64Body?: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=bodyFileName" })
  bodyFileName?: string;

  @SpeakeasyMetadata({ data: "json, name=fault" })
  fault?: PutAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum;

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


export class PutAdminMappingsStubMappingId200ApplicationJson extends SpeakeasyBase {
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
  request?: PutAdminMappingsStubMappingId200ApplicationJsonRequest;

  @SpeakeasyMetadata({ data: "json, name=requiredScenarioState" })
  requiredScenarioState?: string;

  @SpeakeasyMetadata({ data: "json, name=response" })
  response?: PutAdminMappingsStubMappingId200ApplicationJsonResponse;

  @SpeakeasyMetadata({ data: "json, name=scenarioName" })
  scenarioName?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class PutAdminMappingsStubMappingIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAdminMappingsStubMappingIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutAdminMappingsStubMappingIdRequestBody;
}


export class PutAdminMappingsStubMappingIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putAdminMappingsStubMappingId200ApplicationJsonObject?: PutAdminMappingsStubMappingId200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
