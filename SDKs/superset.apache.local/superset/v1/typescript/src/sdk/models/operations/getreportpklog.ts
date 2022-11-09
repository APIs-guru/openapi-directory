import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportPkLogPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetReportPkLogQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetReportPkLogSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetReportPkLogRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReportPkLogPathParams;

  @Metadata()
  queryParams: GetReportPkLogQueryParams;

  @Metadata()
  security: GetReportPkLogSecurity;
}


export class GetReportPkLog200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=ids" })
  ids?: string[];

  @Metadata({ data: "json, name=result", elemType: shared.ReportExecutionLogRestApiGetList })
  result?: shared.ReportExecutionLogRestApiGetList[];
}


export class GetReportPkLog400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLog401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLog422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLog500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getReportPkLog200ApplicationJsonObject?: GetReportPkLog200ApplicationJson;

  @Metadata()
  getReportPkLog400ApplicationJsonObject?: GetReportPkLog400ApplicationJson;

  @Metadata()
  getReportPkLog401ApplicationJsonObject?: GetReportPkLog401ApplicationJson;

  @Metadata()
  getReportPkLog422ApplicationJsonObject?: GetReportPkLog422ApplicationJson;

  @Metadata()
  getReportPkLog500ApplicationJsonObject?: GetReportPkLog500ApplicationJson;

  @Metadata()
  statusCode: number;
}
