import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostAdminRequestsCountRequestBodyBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminRequestsCountRequestBodyBasicAuthCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminRequestsCountRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminRequestsCountRequestBodyBasicAuthCredentials;

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


export class PostAdminRequestsCount200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;
}


export class PostAdminRequestsCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAdminRequestsCountRequestBody;
}


export class PostAdminRequestsCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAdminRequestsCount200ApplicationJsonObject?: PostAdminRequestsCount200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
