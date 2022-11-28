import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatabasePkTableTableNameSchemaNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schema_name" })
  schemaName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=table_name" })
  tableName: string;
}


export class GetDatabasePkTableTableNameSchemaNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabasePkTableTableNameSchemaName400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkTableTableNameSchemaName401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkTableTableNameSchemaName404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkTableTableNameSchemaName422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkTableTableNameSchemaName500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkTableTableNameSchemaNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatabasePkTableTableNameSchemaNamePathParams;

  @SpeakeasyMetadata()
  security: GetDatabasePkTableTableNameSchemaNameSecurity;
}


export class GetDatabasePkTableTableNameSchemaNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDatabasePkTableTableNameSchemaName400ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName400ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkTableTableNameSchemaName401ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName401ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkTableTableNameSchemaName404ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName404ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkTableTableNameSchemaName422ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName422ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkTableTableNameSchemaName500ApplicationJsonObject?: GetDatabasePkTableTableNameSchemaName500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tableMetadataResponseSchema?: shared.TableMetadataResponseSchema;
}
