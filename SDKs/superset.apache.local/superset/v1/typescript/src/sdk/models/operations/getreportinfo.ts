import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetReportInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetReportInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReportInfoQueryParams;

  @Metadata()
  security: GetReportInfoSecurity;
}


export class GetReportInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetReportInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name", elemType: operations.GetReportInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetReportInfo200ApplicationJsonFiltersColumnName[];
}


export class GetReportInfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @Metadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @Metadata({ data: "json, name=filters" })
  filters?: GetReportInfo200ApplicationJsonFilters;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetReportInfo400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportInfo401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportInfo422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportInfo500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getReportInfo200ApplicationJsonObject?: GetReportInfo200ApplicationJson;

  @Metadata()
  getReportInfo400ApplicationJsonObject?: GetReportInfo400ApplicationJson;

  @Metadata()
  getReportInfo401ApplicationJsonObject?: GetReportInfo401ApplicationJson;

  @Metadata()
  getReportInfo422ApplicationJsonObject?: GetReportInfo422ApplicationJson;

  @Metadata()
  getReportInfo500ApplicationJsonObject?: GetReportInfo500ApplicationJson;

  @Metadata()
  statusCode: number;
}
