import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetReportInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetReportInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetReportInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetReportInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetReportInfo200ApplicationJsonFiltersColumnName[];
}


export class GetReportInfo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: GetReportInfo200ApplicationJsonFilters;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetReportInfo400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportInfo401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportInfo422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportInfo500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReportInfoQueryParams;

  @SpeakeasyMetadata()
  security: GetReportInfoSecurity;
}


export class GetReportInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getReportInfo200ApplicationJsonObject?: GetReportInfo200ApplicationJson;

  @SpeakeasyMetadata()
  getReportInfo400ApplicationJsonObject?: GetReportInfo400ApplicationJson;

  @SpeakeasyMetadata()
  getReportInfo401ApplicationJsonObject?: GetReportInfo401ApplicationJson;

  @SpeakeasyMetadata()
  getReportInfo422ApplicationJsonObject?: GetReportInfo422ApplicationJson;

  @SpeakeasyMetadata()
  getReportInfo500ApplicationJsonObject?: GetReportInfo500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
