import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCachekeyInvalidateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostCachekeyInvalidateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CacheInvalidationRequestSchema;

  @Metadata()
  security: PostCachekeyInvalidateSecurity;
}


export class PostCachekeyInvalidate400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostCachekeyInvalidate500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostCachekeyInvalidateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postCachekeyInvalidate400ApplicationJsonObject?: PostCachekeyInvalidate400ApplicationJson;

  @Metadata()
  postCachekeyInvalidate500ApplicationJsonObject?: PostCachekeyInvalidate500ApplicationJson;

  @Metadata()
  statusCode: number;
}
