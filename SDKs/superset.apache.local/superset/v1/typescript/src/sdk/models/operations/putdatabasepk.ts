import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDatabasePkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class PutDatabasePkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PutDatabasePk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.DatabaseRestApiPut;
}


export class PutDatabasePk400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatabasePk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatabasePk403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatabasePk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatabasePk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatabasePk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PutDatabasePkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDatabasePkPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DatabaseRestApiPut;

  @SpeakeasyMetadata()
  security: PutDatabasePkSecurity;
}


export class PutDatabasePkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  putDatabasePk200ApplicationJsonObject?: PutDatabasePk200ApplicationJson;

  @SpeakeasyMetadata()
  putDatabasePk400ApplicationJsonObject?: PutDatabasePk400ApplicationJson;

  @SpeakeasyMetadata()
  putDatabasePk401ApplicationJsonObject?: PutDatabasePk401ApplicationJson;

  @SpeakeasyMetadata()
  putDatabasePk403ApplicationJsonObject?: PutDatabasePk403ApplicationJson;

  @SpeakeasyMetadata()
  putDatabasePk404ApplicationJsonObject?: PutDatabasePk404ApplicationJson;

  @SpeakeasyMetadata()
  putDatabasePk422ApplicationJsonObject?: PutDatabasePk422ApplicationJson;

  @SpeakeasyMetadata()
  putDatabasePk500ApplicationJsonObject?: PutDatabasePk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
