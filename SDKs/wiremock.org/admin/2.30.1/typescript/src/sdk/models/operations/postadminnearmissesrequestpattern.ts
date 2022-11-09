import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials
/** 
 * Pre-emptive basic auth credentials to match against
**/
export class PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}


export class PostAdminNearMissesRequestPatternRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthCredentials" })
  basicAuthCredentials?: PostAdminNearMissesRequestPatternRequestBodyBasicAuthCredentials;

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


export class PostAdminNearMissesRequestPatternRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAdminNearMissesRequestPatternRequestBody;
}


export class PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses extends SpeakeasyBase {
  @Metadata({ data: "json, name=absoluteUrl" })
  absoluteUrl?: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=cookies" })
  cookies?: Map<string, any>;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, any>;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class PostAdminNearMissesRequestPattern200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=nearMisses", elemType: operations.PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses })
  nearMisses?: PostAdminNearMissesRequestPattern200ApplicationJsonNearMisses[];
}


export class PostAdminNearMissesRequestPatternResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAdminNearMissesRequestPattern200ApplicationJsonObject?: PostAdminNearMissesRequestPattern200ApplicationJson;

  @Metadata()
  statusCode: number;
}
