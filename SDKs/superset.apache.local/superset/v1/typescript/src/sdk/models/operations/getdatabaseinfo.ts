import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatabaseInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetDatabaseInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabaseInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDatabaseInfoQueryParams;

  @Metadata()
  security: GetDatabaseInfoSecurity;
}


export class GetDatabaseInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetDatabaseInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name", elemType: operations.GetDatabaseInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetDatabaseInfo200ApplicationJsonFiltersColumnName[];
}


export class GetDatabaseInfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @Metadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @Metadata({ data: "json, name=filters" })
  filters?: GetDatabaseInfo200ApplicationJsonFilters;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetDatabaseInfo400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseInfo401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseInfo422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseInfo500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDatabaseInfo200ApplicationJsonObject?: GetDatabaseInfo200ApplicationJson;

  @Metadata()
  getDatabaseInfo400ApplicationJsonObject?: GetDatabaseInfo400ApplicationJson;

  @Metadata()
  getDatabaseInfo401ApplicationJsonObject?: GetDatabaseInfo401ApplicationJson;

  @Metadata()
  getDatabaseInfo422ApplicationJsonObject?: GetDatabaseInfo422ApplicationJson;

  @Metadata()
  getDatabaseInfo500ApplicationJsonObject?: GetDatabaseInfo500ApplicationJson;

  @Metadata()
  statusCode: number;
}
