import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDashboardInfoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetInfoSchema;
}


export class GetDashboardInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;
}


export class GetDashboardInfo200ApplicationJsonFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name", elemType: GetDashboardInfo200ApplicationJsonFiltersColumnName })
  columnName?: GetDashboardInfo200ApplicationJsonFiltersColumnName[];
}


export class GetDashboardInfo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_columns" })
  addColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=edit_columns" })
  editColumns?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: GetDashboardInfo200ApplicationJsonFilters;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}


export class GetDashboardInfo400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardInfo401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardInfo422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardInfo500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDashboardInfoQueryParams;

  @SpeakeasyMetadata()
  security: GetDashboardInfoSecurity;
}


export class GetDashboardInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDashboardInfo200ApplicationJsonObject?: GetDashboardInfo200ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardInfo400ApplicationJsonObject?: GetDashboardInfo400ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardInfo401ApplicationJsonObject?: GetDashboardInfo401ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardInfo422ApplicationJsonObject?: GetDashboardInfo422ApplicationJson;

  @SpeakeasyMetadata()
  getDashboardInfo500ApplicationJsonObject?: GetDashboardInfo500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
