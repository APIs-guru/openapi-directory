import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChartInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetChartInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChartInfoQueryParams;

  @Metadata()
  security: GetChartInfoSecurity;
}


export class GetChartInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetChartInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name", elemType: operations.GetChartInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetChartInfo200ApplicationJsonFiltersColumnName[];
}


export class GetChartInfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @Metadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @Metadata({ data: "json, name=filters" })
  filters?: GetChartInfo200ApplicationJsonFilters;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetChartInfo400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartInfo401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartInfo422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartInfo500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getChartInfo200ApplicationJsonObject?: GetChartInfo200ApplicationJson;

  @Metadata()
  getChartInfo400ApplicationJsonObject?: GetChartInfo400ApplicationJson;

  @Metadata()
  getChartInfo401ApplicationJsonObject?: GetChartInfo401ApplicationJson;

  @Metadata()
  getChartInfo422ApplicationJsonObject?: GetChartInfo422ApplicationJson;

  @Metadata()
  getChartInfo500ApplicationJsonObject?: GetChartInfo500ApplicationJson;

  @Metadata()
  statusCode: number;
}
