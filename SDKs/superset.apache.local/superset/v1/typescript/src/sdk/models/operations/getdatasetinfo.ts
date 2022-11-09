import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDatasetInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetDatasetInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatasetInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDatasetInfoQueryParams;

  @Metadata()
  security: GetDatasetInfoSecurity;
}


export class GetDatasetInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetDatasetInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name", elemType: operations.GetDatasetInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetDatasetInfo200ApplicationJsonFiltersColumnName[];
}


export class GetDatasetInfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @Metadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @Metadata({ data: "json, name=filters" })
  filters?: GetDatasetInfo200ApplicationJsonFilters;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetDatasetInfo400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetInfo401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetInfo422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetInfo500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDatasetInfo200ApplicationJsonObject?: GetDatasetInfo200ApplicationJson;

  @Metadata()
  getDatasetInfo400ApplicationJsonObject?: GetDatasetInfo400ApplicationJson;

  @Metadata()
  getDatasetInfo401ApplicationJsonObject?: GetDatasetInfo401ApplicationJson;

  @Metadata()
  getDatasetInfo422ApplicationJsonObject?: GetDatasetInfo422ApplicationJson;

  @Metadata()
  getDatasetInfo500ApplicationJsonObject?: GetDatasetInfo500ApplicationJson;

  @Metadata()
  statusCode: number;
}
