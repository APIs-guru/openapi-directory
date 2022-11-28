import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostLogSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostLog201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.LogRestApiPost;
}


export class PostLog400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostLog401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostLog422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostLog500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LogRestApiPost;

  @SpeakeasyMetadata()
  security: PostLogSecurity;
}


export class PostLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postLog201ApplicationJsonObject?: PostLog201ApplicationJson;

  @SpeakeasyMetadata()
  postLog400ApplicationJsonObject?: PostLog400ApplicationJson;

  @SpeakeasyMetadata()
  postLog401ApplicationJsonObject?: PostLog401ApplicationJson;

  @SpeakeasyMetadata()
  postLog422ApplicationJsonObject?: PostLog422ApplicationJson;

  @SpeakeasyMetadata()
  postLog500ApplicationJsonObject?: PostLog500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
