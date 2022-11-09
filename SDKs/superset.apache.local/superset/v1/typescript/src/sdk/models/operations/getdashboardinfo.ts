import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDashboardInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetDashboardInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDashboardInfoQueryParams;

  @Metadata()
  security: GetDashboardInfoSecurity;
}


export class GetDashboardInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetDashboardInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name", elemType: operations.GetDashboardInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetDashboardInfo200ApplicationJsonFiltersColumnName[];
}


export class GetDashboardInfo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @Metadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @Metadata({ data: "json, name=filters" })
  filters?: GetDashboardInfo200ApplicationJsonFilters;

  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetDashboardInfo400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardInfo401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardInfo422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardInfo500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDashboardInfo200ApplicationJsonObject?: GetDashboardInfo200ApplicationJson;

  @Metadata()
  getDashboardInfo400ApplicationJsonObject?: GetDashboardInfo400ApplicationJson;

  @Metadata()
  getDashboardInfo401ApplicationJsonObject?: GetDashboardInfo401ApplicationJson;

  @Metadata()
  getDashboardInfo422ApplicationJsonObject?: GetDashboardInfo422ApplicationJson;

  @Metadata()
  getDashboardInfo500ApplicationJsonObject?: GetDashboardInfo500ApplicationJson;

  @Metadata()
  statusCode: number;
}
