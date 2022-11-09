import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatabasePkSchemasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetDatabasePkSchemasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.DatabaseSchemasQuerySchema;
}


export class GetDatabasePkSchemasSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabasePkSchemasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDatabasePkSchemasPathParams;

  @Metadata()
  queryParams: GetDatabasePkSchemasQueryParams;

  @Metadata()
  security: GetDatabasePkSchemasSecurity;
}


export class GetDatabasePkSchemas400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSchemas401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSchemas404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSchemas500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabasePkSchemasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDatabasePkSchemas400ApplicationJsonObject?: GetDatabasePkSchemas400ApplicationJson;

  @Metadata()
  getDatabasePkSchemas401ApplicationJsonObject?: GetDatabasePkSchemas401ApplicationJson;

  @Metadata()
  getDatabasePkSchemas404ApplicationJsonObject?: GetDatabasePkSchemas404ApplicationJson;

  @Metadata()
  getDatabasePkSchemas500ApplicationJsonObject?: GetDatabasePkSchemas500ApplicationJson;

  @Metadata()
  schemasResponseSchema?: shared.SchemasResponseSchema;

  @Metadata()
  statusCode: number;
}
