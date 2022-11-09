import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatabasePkTableTableNameSchemaNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=schema_name" })
  schemaName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=table_name" })
  tableName: string;
}


export class GetDatabasePkTableTableNameSchemaNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabasePkTableTableNameSchemaNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatabasePkTableTableNameSchemaNamePathParams;

  @Metadata()
  security: GetDatabasePkTableTableNameSchemaNameSecurity;
}


export class GetDatabasePkTableTableNameSchemaName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkTableTableNameSchemaName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkTableTableNameSchemaName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkTableTableNameSchemaName422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkTableTableNameSchemaName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkTableTableNameSchemaNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDatabasePkTableTableNameSchemaName400ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName400ApplicationJson;

  @Metadata()
  getDatabasePkTableTableNameSchemaName401ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName401ApplicationJson;

  @Metadata()
  getDatabasePkTableTableNameSchemaName404ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName404ApplicationJson;

  @Metadata()
  getDatabasePkTableTableNameSchemaName422ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName422ApplicationJson;

  @Metadata()
  getDatabasePkTableTableNameSchemaName500ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName500ApplicationJson;

  @Metadata()
  statusCode: number;

  @Metadata()
  tableMetadataResponseSchema?: shared.TableMetadataResponseSchema;
}
