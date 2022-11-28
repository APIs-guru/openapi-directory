import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportPkLogLogIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=log_id" })
  logId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetReportPkLogLogIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetItemSchema;
}


export class GetReportPkLogLogIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetReportPkLogLogId200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: shared.ReportExecutionLogRestApiGet;
}


export class GetReportPkLogLogId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLogLogId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLogLogId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLogLogId422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLogLogId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLogLogIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReportPkLogLogIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetReportPkLogLogIdQueryParams;

  @SpeakeasyMetadata()
  security: GetReportPkLogLogIdSecurity;
}


export class GetReportPkLogLogIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getReportPkLogLogId200ApplicationJsonObject?: GetReportPkLogLogId200ApplicationJson;

  @SpeakeasyMetadata()
  getReportPkLogLogId400ApplicationJsonObject?: GetReportPkLogLogId400ApplicationJson;

  @SpeakeasyMetadata()
  getReportPkLogLogId401ApplicationJsonObject?: GetReportPkLogLogId401ApplicationJson;

  @SpeakeasyMetadata()
  getReportPkLogLogId404ApplicationJsonObject?: GetReportPkLogLogId404ApplicationJson;

  @SpeakeasyMetadata()
  getReportPkLogLogId422ApplicationJsonObject?: GetReportPkLogLogId422ApplicationJson;

  @SpeakeasyMetadata()
  getReportPkLogLogId500ApplicationJsonObject?: GetReportPkLogLogId500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
