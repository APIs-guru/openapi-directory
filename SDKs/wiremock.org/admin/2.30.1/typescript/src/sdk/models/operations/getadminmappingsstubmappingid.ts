import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAdminMappingsStubMappingIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=stubMappingId" })
  stubMappingId: string;
}


export class GetAdminMappingsStubMappingIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAdminMappingsStubMappingIdPathParams;
}


// GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class GetAdminMappingsStubMappingId200ApplicationJsonRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: GetAdminMappingsStubMappingId200ApplicationJsonRequestBasicAuthCredentials;

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

export enum GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER"
,    EmptyResponse = "EMPTY_RESPONSE"
,    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK"
,    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}


export class GetAdminMappingsStubMappingId200ApplicationJsonResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalProxyRequestHeaders" })
  additionalProxyRequestHeaders?: Map<string, any>;

  @Metadata({ data: "json, name=base64Body" })
  base64Body?: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=bodyFileName" })
  bodyFileName?: string;

  @Metadata({ data: "json, name=fault" })
  fault?: GetAdminMappingsStubMappingId200ApplicationJsonResponseFaultEnum;

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


export class GetAdminMappingsStubMappingId200ApplicationJson extends SpeakeasyBase {
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
  request?: GetAdminMappingsStubMappingId200ApplicationJsonRequest;

  @Metadata({ data: "json, name=requiredScenarioState" })
  requiredScenarioState?: string;

  @Metadata({ data: "json, name=response" })
  response?: GetAdminMappingsStubMappingId200ApplicationJsonResponse;

  @Metadata({ data: "json, name=scenarioName" })
  scenarioName?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class GetAdminMappingsStubMappingIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAdminMappingsStubMappingId200ApplicationJsonObject?: GetAdminMappingsStubMappingId200ApplicationJson;

  @Metadata()
  statusCode: number;
}
