import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatabasePkSelectStarTableNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=table_name" })
  tableName: string;
}


export class GetDatabasePkSelectStarTableNameQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=schema_name" })
  schemaName: string;
}


export class GetDatabasePkSelectStarTableNameSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabasePkSelectStarTableNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatabasePkSelectStarTableNamePathParams;

  @Metadata()
  queryParams: GetDatabasePkSelectStarTableNameQueryParams;

  @Metadata()
  security: GetDatabasePkSelectStarTableNameSecurity;
}


export class GetDatabasePkSelectStarTableName400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableName401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableName404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableName422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableName500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDatabasePkSelectStarTableName400ApplicationJsonObject?: GetDatabasePkSelectStarTableName400ApplicationJson;

  @Metadata()
  getDatabasePkSelectStarTableName401ApplicationJsonObject?: GetDatabasePkSelectStarTableName401ApplicationJson;

  @Metadata()
  getDatabasePkSelectStarTableName404ApplicationJsonObject?: GetDatabasePkSelectStarTableName404ApplicationJson;

  @Metadata()
  getDatabasePkSelectStarTableName422ApplicationJsonObject?: GetDatabasePkSelectStarTableName422ApplicationJson;

  @Metadata()
  getDatabasePkSelectStarTableName500ApplicationJsonObject?: GetDatabasePkSelectStarTableName500ApplicationJson;

  @Metadata()
  selectStarResponseSchema?: shared.SelectStarResponseSchema;

  @Metadata()
  statusCode: number;
}
