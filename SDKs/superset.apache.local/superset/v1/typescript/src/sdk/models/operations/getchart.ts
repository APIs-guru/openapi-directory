import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChartQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetChartSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetChartQueryParams;

  @Metadata()
  security: GetChartSecurity;
}


export class GetChart200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetChart200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetChart200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetChart200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetChart200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @Metadata({ data: "json, name=list_title" })
  listTitle?: string;

  @Metadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @Metadata({ data: "json, name=result", elemType: shared.ChartRestApiGetList })
  result?: shared.ChartRestApiGetList[];
}


export class GetChart400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChart401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChart422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChart500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getChart200ApplicationJsonObject?: GetChart200ApplicationJson;

  @Metadata()
  getChart400ApplicationJsonObject?: GetChart400ApplicationJson;

  @Metadata()
  getChart401ApplicationJsonObject?: GetChart401ApplicationJson;

  @Metadata()
  getChart422ApplicationJsonObject?: GetChart422ApplicationJson;

  @Metadata()
  getChart500ApplicationJsonObject?: GetChart500ApplicationJson;

  @Metadata()
  statusCode: number;
}
