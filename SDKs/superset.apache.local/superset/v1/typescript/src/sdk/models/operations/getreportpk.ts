import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportPkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetReportPkQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetReportPkSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetReportPkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReportPkPathParams;

  @Metadata()
  queryParams: GetReportPkQueryParams;

  @Metadata()
  security: GetReportPkSecurity;
}


export class GetReportPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetReportPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName?: string;
}


export class GetReportPk200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=description_columns" })
  descriptionColumns?: GetReportPk200ApplicationJsonDescriptionColumns;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=label_columns" })
  labelColumns?: GetReportPk200ApplicationJsonLabelColumns;

  @Metadata({ data: "json, name=result" })
  result?: shared.ReportScheduleRestApiGet;

  @Metadata({ data: "json, name=show_columns" })
  showColumns?: string[];

  @Metadata({ data: "json, name=show_title" })
  showTitle?: string;
}


export class GetReportPk400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPk401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPk404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPk422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPk500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getReportPk200ApplicationJsonObject?: GetReportPk200ApplicationJson;

  @Metadata()
  getReportPk400ApplicationJsonObject?: GetReportPk400ApplicationJson;

  @Metadata()
  getReportPk401ApplicationJsonObject?: GetReportPk401ApplicationJson;

  @Metadata()
  getReportPk404ApplicationJsonObject?: GetReportPk404ApplicationJson;

  @Metadata()
  getReportPk422ApplicationJsonObject?: GetReportPk422ApplicationJson;

  @Metadata()
  getReportPk500ApplicationJsonObject?: GetReportPk500ApplicationJson;

  @Metadata()
  statusCode: number;
}
