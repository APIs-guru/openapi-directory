import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetReportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetReportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReportQueryParams;

  @Metadata()
  security: GetReportSecurity;
}


export class GetReport200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetReport200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetReport200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetReport200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetReport200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=list_columns" })
  listColumns?: string[];

  @Metadata({ data: "json, name=list_title" })
  listTitle?: string;

  @Metadata({ data: "json, name=order_columns" })
  orderColumns?: string[];

  @Metadata({ data: "json, name=result", elemType: shared.ReportScheduleRestApiGetList })
  result?: shared.ReportScheduleRestApiGetList[];
}


export class GetReport400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReport401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReport422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReport500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getReport200ApplicationJsonObject?: GetReport200ApplicationJson;

  @Metadata()
  getReport400ApplicationJsonObject?: GetReport400ApplicationJson;

  @Metadata()
  getReport401ApplicationJsonObject?: GetReport401ApplicationJson;

  @Metadata()
  getReport422ApplicationJsonObject?: GetReport422ApplicationJson;

  @Metadata()
  getReport500ApplicationJsonObject?: GetReport500ApplicationJson;

  @Metadata()
  statusCode: number;
}
