import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutDatabasePkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutDatabasePkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutDatabasePkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutDatabasePkPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DatabaseRestApiPut;

  @Metadata()
  security: PutDatabasePkSecurity;
}


export class PutDatabasePk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=result" })
  result?: shared.DatabaseRestApiPut;
}


export class PutDatabasePk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatabasePk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatabasePk403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatabasePk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatabasePk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatabasePk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatabasePkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  putDatabasePk200ApplicationJsonObject?: PutDatabasePk200ApplicationJson;

  @Metadata()
  putDatabasePk400ApplicationJsonObject?: PutDatabasePk400ApplicationJson;

  @Metadata()
  putDatabasePk401ApplicationJsonObject?: PutDatabasePk401ApplicationJson;

  @Metadata()
  putDatabasePk403ApplicationJsonObject?: PutDatabasePk403ApplicationJson;

  @Metadata()
  putDatabasePk404ApplicationJsonObject?: PutDatabasePk404ApplicationJson;

  @Metadata()
  putDatabasePk422ApplicationJsonObject?: PutDatabasePk422ApplicationJson;

  @Metadata()
  putDatabasePk500ApplicationJsonObject?: PutDatabasePk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
