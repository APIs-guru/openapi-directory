import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAdminMappingsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetAdminMappingsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAdminMappingsQueryParams;
}


// GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class GetAdminMappings200ApplicationJsonMappingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: GetAdminMappings200ApplicationJsonMappingsRequestBasicAuthCredentials;

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

export enum GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum {
    ConnectionResetByPeer = "CONNECTION_RESET_BY_PEER"
,    EmptyResponse = "EMPTY_RESPONSE"
,    MalformedResponseChunk = "MALFORMED_RESPONSE_CHUNK"
,    RandomDataThenClose = "RANDOM_DATA_THEN_CLOSE"
}


export class GetAdminMappings200ApplicationJsonMappingsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalProxyRequestHeaders" })
  additionalProxyRequestHeaders?: Map<string, any>;

  @Metadata({ data: "json, name=base64Body" })
  base64Body?: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=bodyFileName" })
  bodyFileName?: string;

  @Metadata({ data: "json, name=fault" })
  fault?: GetAdminMappings200ApplicationJsonMappingsResponseFaultEnum;

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


export class GetAdminMappings200ApplicationJsonMappings extends SpeakeasyBase {
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
  request?: GetAdminMappings200ApplicationJsonMappingsRequest;

  @Metadata({ data: "json, name=requiredScenarioState" })
  requiredScenarioState?: string;

  @Metadata({ data: "json, name=response" })
  response?: GetAdminMappings200ApplicationJsonMappingsResponse;

  @Metadata({ data: "json, name=scenarioName" })
  scenarioName?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class GetAdminMappings200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=total" })
  total: number;
}


export class GetAdminMappings200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=mappings", elemType: operations.GetAdminMappings200ApplicationJsonMappings })
  mappings?: GetAdminMappings200ApplicationJsonMappings[];

  @Metadata({ data: "json, name=meta" })
  meta?: GetAdminMappings200ApplicationJsonMeta;
}


export class GetAdminMappingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAdminMappings200ApplicationJsonObject?: GetAdminMappings200ApplicationJson;

  @Metadata()
  statusCode: number;
}
