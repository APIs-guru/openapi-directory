import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatabaseInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetDatabaseInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatabaseInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetDatabaseInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetDatabaseInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetDatabaseInfo200ApplicationJsonFiltersColumnName[];
}


export class GetDatabaseInfo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: GetDatabaseInfo200ApplicationJsonFilters;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetDatabaseInfo400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseInfo401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseInfo422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseInfo500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatabaseInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDatabaseInfoQueryParams;

  @SpeakeasyMetadata()
  security: GetDatabaseInfoSecurity;
}


export class GetDatabaseInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDatabaseInfo200ApplicationJsonObject?: GetDatabaseInfo200ApplicationJson;

  @SpeakeasyMetadata()
  getDatabaseInfo400ApplicationJsonObject?: GetDatabaseInfo400ApplicationJson;

  @SpeakeasyMetadata()
  getDatabaseInfo401ApplicationJsonObject?: GetDatabaseInfo401ApplicationJson;

  @SpeakeasyMetadata()
  getDatabaseInfo422ApplicationJsonObject?: GetDatabaseInfo422ApplicationJson;

  @SpeakeasyMetadata()
  getDatabaseInfo500ApplicationJsonObject?: GetDatabaseInfo500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
