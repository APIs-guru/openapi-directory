import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatabasePkSelectStarTableNameSchemaNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=schema_name" })
  schemaName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=table_name" })
  tableName: string;
}


export class GetDatabasePkSelectStarTableNameSchemaNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabasePkSelectStarTableNameSchemaNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatabasePkSelectStarTableNameSchemaNamePathParams;

  @Metadata()
  security: GetDatabasePkSelectStarTableNameSchemaNameSecurity;
}


export class GetDatabasePkSelectStarTableNameSchemaName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableNameSchemaName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableNameSchemaName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableNameSchemaName422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableNameSchemaName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableNameSchemaNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDatabasePkSelectStarTableNameSchemaName400ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName400ApplicationJson;

  @Metadata()
  getDatabasePkSelectStarTableNameSchemaName401ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName401ApplicationJson;

  @Metadata()
  getDatabasePkSelectStarTableNameSchemaName404ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName404ApplicationJson;

  @Metadata()
  getDatabasePkSelectStarTableNameSchemaName422ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName422ApplicationJson;

  @Metadata()
  getDatabasePkSelectStarTableNameSchemaName500ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName500ApplicationJson;

  @Metadata()
  selectStarResponseSchema?: shared.SelectStarResponseSchema;

  @Metadata()
  statusCode: number;
}
