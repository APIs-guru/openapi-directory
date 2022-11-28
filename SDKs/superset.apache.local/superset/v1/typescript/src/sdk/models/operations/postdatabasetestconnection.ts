import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDatabaseTestConnectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostDatabaseTestConnection200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseTestConnection400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseTestConnection422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseTestConnection500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostDatabaseTestConnectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DatabaseTestConnectionSchema;

  @SpeakeasyMetadata()
  security: PostDatabaseTestConnectionSecurity;
}


export class PostDatabaseTestConnectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postDatabaseTestConnection200ApplicationJsonObject?: PostDatabaseTestConnection200ApplicationJson;

  @SpeakeasyMetadata()
  postDatabaseTestConnection400ApplicationJsonObject?: PostDatabaseTestConnection400ApplicationJson;

  @SpeakeasyMetadata()
  postDatabaseTestConnection422ApplicationJsonObject?: PostDatabaseTestConnection422ApplicationJson;

  @SpeakeasyMetadata()
  postDatabaseTestConnection500ApplicationJsonObject?: PostDatabaseTestConnection500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
