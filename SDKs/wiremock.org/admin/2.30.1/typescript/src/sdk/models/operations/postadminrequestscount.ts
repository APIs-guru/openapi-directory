import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PostAdminRequestsCountRequestBodyBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminRequestsCountRequestBodyBasicAuthCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminRequestsCountRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminRequestsCountRequestBodyBasicAuthCredentials;

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


export class PostAdminRequestsCountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAdminRequestsCountRequestBody;
}


export class PostAdminRequestsCount200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;
}


export class PostAdminRequestsCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAdminRequestsCount200ApplicationJsonObject?: PostAdminRequestsCount200ApplicationJson;

  @Metadata()
  statusCode: number;
}
