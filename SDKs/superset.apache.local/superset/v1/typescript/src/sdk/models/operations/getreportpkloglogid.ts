import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportPkLogLogIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=log_id" })
  logId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetReportPkLogLogIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetReportPkLogLogIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetReportPkLogLogIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReportPkLogLogIdPathParams;

  @Metadata()
  queryParams: GetReportPkLogLogIdQueryParams;

  @Metadata()
  security: GetReportPkLogLogIdSecurity;
}


export class GetReportPkLogLogId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=result" })
  result?: shared.ReportExecutionLogRestApiGet;
}


export class GetReportPkLogLogId400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLogLogId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLogLogId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLogLogId422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLogLogId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLogLogIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getReportPkLogLogId200ApplicationJsonObject?: GetReportPkLogLogId200ApplicationJson;

  @Metadata()
  getReportPkLogLogId400ApplicationJsonObject?: GetReportPkLogLogId400ApplicationJson;

  @Metadata()
  getReportPkLogLogId401ApplicationJsonObject?: GetReportPkLogLogId401ApplicationJson;

  @Metadata()
  getReportPkLogLogId404ApplicationJsonObject?: GetReportPkLogLogId404ApplicationJson;

  @Metadata()
  getReportPkLogLogId422ApplicationJsonObject?: GetReportPkLogLogId422ApplicationJson;

  @Metadata()
  getReportPkLogLogId500ApplicationJsonObject?: GetReportPkLogLogId500ApplicationJson;

  @Metadata()
  statusCode: number;
}
