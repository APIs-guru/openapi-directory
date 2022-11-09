import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSavedQueryInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetSavedQueryInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSavedQueryInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSavedQueryInfoQueryParams;

  @Metadata()
  security: GetSavedQueryInfoSecurity;
}


export class GetSavedQueryInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetSavedQueryInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name", elemType: operations.GetSavedQueryInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetSavedQueryInfo200ApplicationJsonFiltersColumnName[];
}


export class GetSavedQueryInfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @Metadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @Metadata({ data: "json, name=filters" })
  filters?: GetSavedQueryInfo200ApplicationJsonFilters;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetSavedQueryInfo400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryInfo401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryInfo422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryInfo500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSavedQueryInfo200ApplicationJsonObject?: GetSavedQueryInfo200ApplicationJson;

  @Metadata()
  getSavedQueryInfo400ApplicationJsonObject?: GetSavedQueryInfo400ApplicationJson;

  @Metadata()
  getSavedQueryInfo401ApplicationJsonObject?: GetSavedQueryInfo401ApplicationJson;

  @Metadata()
  getSavedQueryInfo422ApplicationJsonObject?: GetSavedQueryInfo422ApplicationJson;

  @Metadata()
  getSavedQueryInfo500ApplicationJsonObject?: GetSavedQueryInfo500ApplicationJson;

  @Metadata()
  statusCode: number;
}
