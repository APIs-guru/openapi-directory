import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteDatabasePkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class DeleteDatabasePkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class DeleteDatabasePkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDatabasePkPathParams;

  @Metadata()
  security: DeleteDatabasePkSecurity;
}


export class DeleteDatabasePk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatabasePk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatabasePk403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatabasePk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatabasePk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatabasePk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteDatabasePkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteDatabasePk200ApplicationJsonObject?: DeleteDatabasePk200ApplicationJson;

  @Metadata()
  deleteDatabasePk401ApplicationJsonObject?: DeleteDatabasePk401ApplicationJson;

  @Metadata()
  deleteDatabasePk403ApplicationJsonObject?: DeleteDatabasePk403ApplicationJson;

  @Metadata()
  deleteDatabasePk404ApplicationJsonObject?: DeleteDatabasePk404ApplicationJson;

  @Metadata()
  deleteDatabasePk422ApplicationJsonObject?: DeleteDatabasePk422ApplicationJson;

  @Metadata()
  deleteDatabasePk500ApplicationJsonObject?: DeleteDatabasePk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
