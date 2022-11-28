import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAdminNearMissesRequestRequestBody extends SpeakeasyBase {
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


export class PostAdminNearMissesRequest200ApplicationJsonNearMisses extends SpeakeasyBase {
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


export class PostAdminNearMissesRequest200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nearMisses", elemType: PostAdminNearMissesRequest200ApplicationJsonNearMisses })
  nearMisses?: PostAdminNearMissesRequest200ApplicationJsonNearMisses[];
}


export class PostAdminNearMissesRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostAdminNearMissesRequestRequestBody;
}


export class PostAdminNearMissesRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postAdminNearMissesRequest200ApplicationJsonObject?: PostAdminNearMissesRequest200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
