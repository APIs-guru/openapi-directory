import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostDatabaseTestConnectionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDatabaseTestConnectionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DatabaseTestConnectionSchema;

  @Metadata()
  security: PostDatabaseTestConnectionSecurity;
}


export class PostDatabaseTestConnection200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseTestConnection400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseTestConnection422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseTestConnection500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseTestConnectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postDatabaseTestConnection200ApplicationJsonObject?: PostDatabaseTestConnection200ApplicationJson;

  @Metadata()
  postDatabaseTestConnection400ApplicationJsonObject?: PostDatabaseTestConnection400ApplicationJson;

  @Metadata()
  postDatabaseTestConnection422ApplicationJsonObject?: PostDatabaseTestConnection422ApplicationJson;

  @Metadata()
  postDatabaseTestConnection500ApplicationJsonObject?: PostDatabaseTestConnection500ApplicationJson;

  @Metadata()
  statusCode: number;
}
