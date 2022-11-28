import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostAdminRequestsRemoveRequestBodyBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminRequestsRemoveRequestBodyBasicAuthCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminRequestsRemoveRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminRequestsRemoveRequestBodyBasicAuthCredentials;

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


export class PostAdminRequestsRemoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAdminRequestsRemoveRequestBody;
}


export class PostAdminRequestsRemoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
