import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDatabaseSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDatabaseRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DatabaseRestApiPost;

  @Metadata()
  security: PostDatabaseSecurity;
}


export class PostDatabase201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.DatabaseRestApiPost;
}


export class PostDatabase400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabase401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabase404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabase500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postDatabase201ApplicationJsonObject?: PostDatabase201ApplicationJson;

  @Metadata()
  postDatabase400ApplicationJsonObject?: PostDatabase400ApplicationJson;

  @Metadata()
  postDatabase401ApplicationJsonObject?: PostDatabase401ApplicationJson;

  @Metadata()
  postDatabase404ApplicationJsonObject?: PostDatabase404ApplicationJson;

  @Metadata()
  postDatabase500ApplicationJsonObject?: PostDatabase500ApplicationJson;

  @Metadata()
  statusCode: number;
}
