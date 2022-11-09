import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostAdminNearMissesRequestRequestBody extends SpeakeasyBase {
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


export class PostAdminNearMissesRequestRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostAdminNearMissesRequestRequestBody;
}


export class PostAdminNearMissesRequest200ApplicationJsonNearMisses extends SpeakeasyBase {
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


export class PostAdminNearMissesRequest200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=nearMisses", elemType: operations.PostAdminNearMissesRequest200ApplicationJsonNearMisses })
  nearMisses?: PostAdminNearMissesRequest200ApplicationJsonNearMisses[];
}


export class PostAdminNearMissesRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postAdminNearMissesRequest200ApplicationJsonObject?: PostAdminNearMissesRequest200ApplicationJson;

  @Metadata()
  statusCode: number;
}
