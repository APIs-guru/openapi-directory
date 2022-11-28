import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteDatabasePkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteDatabasePkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDatabasePk200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatabasePk401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatabasePk403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatabasePk404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatabasePk422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatabasePk500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatabasePkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDatabasePkPathParams;

  @SpeakeasyMetadata()
  security: DeleteDatabasePkSecurity;
}


export class DeleteDatabasePkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteDatabasePk200ApplicationJsonObject?: DeleteDatabasePk200ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatabasePk401ApplicationJsonObject?: DeleteDatabasePk401ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatabasePk403ApplicationJsonObject?: DeleteDatabasePk403ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatabasePk404ApplicationJsonObject?: DeleteDatabasePk404ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatabasePk422ApplicationJsonObject?: DeleteDatabasePk422ApplicationJson;

  @SpeakeasyMetadata()
  deleteDatabasePk500ApplicationJsonObject?: DeleteDatabasePk500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
