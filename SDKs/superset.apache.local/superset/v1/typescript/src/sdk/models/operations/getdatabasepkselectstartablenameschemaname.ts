import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatabasePkSelectStarTableNameSchemaNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=schema_name" })
  schemaName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=table_name" })
  tableName: string;
}


export class GetDatabasePkSelectStarTableNameSchemaNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabasePkSelectStarTableNameSchemaName400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableNameSchemaName401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableNameSchemaName404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableNameSchemaName422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableNameSchemaName500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableNameSchemaNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatabasePkSelectStarTableNameSchemaNamePathParams;

  @SpeakeasyMetadata()
  security: GetDatabasePkSelectStarTableNameSchemaNameSecurity;
}


export class GetDatabasePkSelectStarTableNameSchemaNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDatabasePkSelectStarTableNameSchemaName400ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName400ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkSelectStarTableNameSchemaName401ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName401ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkSelectStarTableNameSchemaName404ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName404ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkSelectStarTableNameSchemaName422ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName422ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkSelectStarTableNameSchemaName500ApplicationJsonObject?: GetDatabasePkSelectStarTableNameSchemaName500ApplicationJson;

  @SpeakeasyMetadata()
  selectStarResponseSchema?: shared.SelectStarResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
