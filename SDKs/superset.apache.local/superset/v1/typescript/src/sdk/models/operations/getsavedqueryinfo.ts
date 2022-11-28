import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSavedQueryInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetSavedQueryInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetSavedQueryInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetSavedQueryInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetSavedQueryInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetSavedQueryInfo200ApplicationJsonFiltersColumnName[];
}


export class GetSavedQueryInfo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: GetSavedQueryInfo200ApplicationJsonFilters;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetSavedQueryInfo400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryInfo401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryInfo422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryInfo500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedQueryInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSavedQueryInfoQueryParams;

  @SpeakeasyMetadata()
  security: GetSavedQueryInfoSecurity;
}


export class GetSavedQueryInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getSavedQueryInfo200ApplicationJsonObject?: GetSavedQueryInfo200ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryInfo400ApplicationJsonObject?: GetSavedQueryInfo400ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryInfo401ApplicationJsonObject?: GetSavedQueryInfo401ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryInfo422ApplicationJsonObject?: GetSavedQueryInfo422ApplicationJson;

  @SpeakeasyMetadata()
  getSavedQueryInfo500ApplicationJsonObject?: GetSavedQueryInfo500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
