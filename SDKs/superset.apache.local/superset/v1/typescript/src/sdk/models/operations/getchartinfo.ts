import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChartInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetChartInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetChartInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetChartInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetChartInfo200ApplicationJsonFiltersColumnName[];
}


export class GetChartInfo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: GetChartInfo200ApplicationJsonFilters;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetChartInfo400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartInfo401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartInfo422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartInfo500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChartInfoQueryParams;

  @SpeakeasyMetadata()
  security: GetChartInfoSecurity;
}


export class GetChartInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getChartInfo200ApplicationJsonObject?: GetChartInfo200ApplicationJson;

  @SpeakeasyMetadata()
  getChartInfo400ApplicationJsonObject?: GetChartInfo400ApplicationJson;

  @SpeakeasyMetadata()
  getChartInfo401ApplicationJsonObject?: GetChartInfo401ApplicationJson;

  @SpeakeasyMetadata()
  getChartInfo422ApplicationJsonObject?: GetChartInfo422ApplicationJson;

  @SpeakeasyMetadata()
  getChartInfo500ApplicationJsonObject?: GetChartInfo500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
