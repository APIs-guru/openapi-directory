import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostLogSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostLogRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LogRestApiPost;

  @Metadata()
  security: PostLogSecurity;
}


export class PostLog201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=result" })
  result?: shared.LogRestApiPost;
}


export class PostLog400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostLog401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostLog422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostLog500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostLogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postLog201ApplicationJsonObject?: PostLog201ApplicationJson;

  @Metadata()
  postLog400ApplicationJsonObject?: PostLog400ApplicationJson;

  @Metadata()
  postLog401ApplicationJsonObject?: PostLog401ApplicationJson;

  @Metadata()
  postLog422ApplicationJsonObject?: PostLog422ApplicationJson;

  @Metadata()
  postLog500ApplicationJsonObject?: PostLog500ApplicationJson;

  @Metadata()
  statusCode: number;
}
