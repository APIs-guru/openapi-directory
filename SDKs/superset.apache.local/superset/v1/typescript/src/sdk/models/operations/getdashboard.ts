import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDashboardQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetDashboardSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetDashboardRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDashboardQueryParams;

  @Metadata()
  security: GetDashboardSecurity;
}


export class GetDashboard200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetDashboard200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetDashboard200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetDashboard200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetDashboard200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @Metadata({ data: "json, name=list_title" })
  listTitle?: string;

  @Metadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @Metadata({ data: "json, name=result", elemType: shared.DashboardRestApiGetList })
  result?: shared.DashboardRestApiGetList[];
}


export class GetDashboard400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboard401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboard422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboard500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetDashboardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDashboard200ApplicationJsonObject?: GetDashboard200ApplicationJson;

  @Metadata()
  getDashboard400ApplicationJsonObject?: GetDashboard400ApplicationJson;

  @Metadata()
  getDashboard401ApplicationJsonObject?: GetDashboard401ApplicationJson;

  @Metadata()
  getDashboard422ApplicationJsonObject?: GetDashboard422ApplicationJson;

  @Metadata()
  getDashboard500ApplicationJsonObject?: GetDashboard500ApplicationJson;

  @Metadata()
  statusCode: number;
}
