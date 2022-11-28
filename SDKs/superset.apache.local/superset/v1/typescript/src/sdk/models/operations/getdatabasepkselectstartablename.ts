import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatabasePkSelectStarTableNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=table_name" })
  tableName: string;
}


export class GetDatabasePkSelectStarTableNameQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schema_name" })
  schemaName: string;
}


export class GetDatabasePkSelectStarTableNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabasePkSelectStarTableName400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableName401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableName404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableName422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableName500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSelectStarTableNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatabasePkSelectStarTableNamePathParams;

  @SpeakeasyMetadata()
  queryParams: GetDatabasePkSelectStarTableNameQueryParams;

  @SpeakeasyMetadata()
  security: GetDatabasePkSelectStarTableNameSecurity;
}


export class GetDatabasePkSelectStarTableNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDatabasePkSelectStarTableName400ApplicationJsonObject?: GetDatabasePkSelectStarTableName400ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkSelectStarTableName401ApplicationJsonObject?: GetDatabasePkSelectStarTableName401ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkSelectStarTableName404ApplicationJsonObject?: GetDatabasePkSelectStarTableName404ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkSelectStarTableName422ApplicationJsonObject?: GetDatabasePkSelectStarTableName422ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkSelectStarTableName500ApplicationJsonObject?: GetDatabasePkSelectStarTableName500ApplicationJson;

  @SpeakeasyMetadata()
  selectStarResponseSchema?: shared.SelectStarResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
