import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatabasePkSchemasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetDatabasePkSchemasQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.DatabaseSchemasQuerySchema;
}


export class GetDatabasePkSchemasSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabasePkSchemas400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSchemas401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSchemas404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSchemas500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSchemasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatabasePkSchemasPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDatabasePkSchemasQueryParams;

  @SpeakeasyMetadata()
  security: GetDatabasePkSchemasSecurity;
}


export class GetDatabasePkSchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDatabasePkSchemas400ApplicationJsonObject?: GetDatabasePkSchemas400ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkSchemas401ApplicationJsonObject?: GetDatabasePkSchemas401ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkSchemas404ApplicationJsonObject?: GetDatabasePkSchemas404ApplicationJson;

  @SpeakeasyMetadata()
  getDatabasePkSchemas500ApplicationJsonObject?: GetDatabasePkSchemas500ApplicationJson;

  @SpeakeasyMetadata()
  schemasResponseSchema?: shared.SchemasResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
