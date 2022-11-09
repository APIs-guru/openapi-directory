import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChartPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetChartPkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetChartPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChartPkPathParams;

  @Metadata()
  queryParams: GetChartPkQueryParams;

  @Metadata()
  security: GetChartPkSecurity;
}


export class GetChartPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetChartPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetChartPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetChartPk200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetChartPk200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=result" })
  result?: shared.ChartRestApiGet;

  @Metadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @Metadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetChartPk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getChartPk200ApplicationJsonObject?: GetChartPk200ApplicationJson;

  @Metadata()
  getChartPk400ApplicationJsonObject?: GetChartPk400ApplicationJson;

  @Metadata()
  getChartPk401ApplicationJsonObject?: GetChartPk401ApplicationJson;

  @Metadata()
  getChartPk404ApplicationJsonObject?: GetChartPk404ApplicationJson;

  @Metadata()
  getChartPk422ApplicationJsonObject?: GetChartPk422ApplicationJson;

  @Metadata()
  getChartPk500ApplicationJsonObject?: GetChartPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
