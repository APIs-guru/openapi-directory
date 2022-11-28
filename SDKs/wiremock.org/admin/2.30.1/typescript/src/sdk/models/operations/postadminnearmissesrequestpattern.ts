import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminNearMissesRequestPatternRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials;

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


export class PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=absoluteUrl" })
  absoluteUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=cookies" })
  cookies?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class PostAdminNearMissesRequestPattern200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nearMisses", elemType: PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses })
  nearMisses?: PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses[];
}


export class PostAdminNearMissesRequestPatternRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAdminNearMissesRequestPatternRequestBody;
}


export class PostAdminNearMissesRequestPatternResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAdminNearMissesRequestPattern200ApplicationJsonObject?: PostAdminNearMissesRequestPattern200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
