import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDashboardQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetDashboardSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboard200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetDashboard200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetDashboard200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetDashboard200ApplicationJsonDescriptionColumns;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=label_columns" })
  labelColumns?: GetDashboard200ApplicationJsonLabelColumns;

  @SpeakeasyMetadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=list_title" })
  listTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @SpeakeasyMetadata({ data: "json, name=result", elemType: shared.DashboardRestApiGetList })
  result?: shared.DashboardRestApiGetList[];
}


export class GetDashboard400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboard401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboard422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboard500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDashboardQueryParams;

  @SpeakeasyMetadata()
  security: GetDashboardSecurity;
}


export class GetDashboardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDashboard200ApplicationJsonObject?: GetDashboard200ApplicationJson;

  @SpeakeasyMetadata()
  getDashboard400ApplicationJsonObject?: GetDashboard400ApplicationJson;

  @SpeakeasyMetadata()
  getDashboard401ApplicationJsonObject?: GetDashboard401ApplicationJson;

  @SpeakeasyMetadata()
  getDashboard422ApplicationJsonObject?: GetDashboard422ApplicationJson;

  @SpeakeasyMetadata()
  getDashboard500ApplicationJsonObject?: GetDashboard500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
