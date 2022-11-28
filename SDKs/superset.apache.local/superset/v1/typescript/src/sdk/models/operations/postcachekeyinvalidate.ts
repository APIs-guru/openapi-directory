import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCachekeyInvalidateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostCachekeyInvalidate400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostCachekeyInvalidate500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostCachekeyInvalidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CacheInvalidationRequestSchema;

  @SpeakeasyMetadata()
  security: PostCachekeyInvalidateSecurity;
}


export class PostCachekeyInvalidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postCachekeyInvalidate400ApplicationJsonObject?: PostCachekeyInvalidate400ApplicationJson;

  @SpeakeasyMetadata()
  postCachekeyInvalidate500ApplicationJsonObject?: PostCachekeyInvalidate500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
