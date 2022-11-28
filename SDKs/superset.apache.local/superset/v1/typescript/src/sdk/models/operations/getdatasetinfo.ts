import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatasetInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetDatasetInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDatasetInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetDatasetInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetDatasetInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetDatasetInfo200ApplicationJsonFiltersColumnName[];
}


export class GetDatasetInfo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: GetDatasetInfo200ApplicationJsonFilters;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetDatasetInfo400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetInfo401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetInfo422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetInfo500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDatasetInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDatasetInfoQueryParams;

  @SpeakeasyMetadata()
  security: GetDatasetInfoSecurity;
}


export class GetDatasetInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDatasetInfo200ApplicationJsonObject?: GetDatasetInfo200ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetInfo400ApplicationJsonObject?: GetDatasetInfo400ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetInfo401ApplicationJsonObject?: GetDatasetInfo401ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetInfo422ApplicationJsonObject?: GetDatasetInfo422ApplicationJson;

  @SpeakeasyMetadata()
  getDatasetInfo500ApplicationJsonObject?: GetDatasetInfo500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
