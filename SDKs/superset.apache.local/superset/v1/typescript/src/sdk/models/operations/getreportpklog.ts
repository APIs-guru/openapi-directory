import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportPkLogPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetReportPkLogQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.GetListSchema;
}


export class GetReportPkLogSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetReportPkLog200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "json, name=result", elemType: shared.ReportExecutionLogRestApiGetList })
  result?: shared.ReportExecutionLogRestApiGetList[];
}


export class GetReportPkLog400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLog401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLog422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLog500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReportPkLogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReportPkLogPathParams;

  @SpeakeasyMetadata()
  queryParams: GetReportPkLogQueryParams;

  @SpeakeasyMetadata()
  security: GetReportPkLogSecurity;
}


export class GetReportPkLogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getReportPkLog200ApplicationJsonObject?: GetReportPkLog200ApplicationJson;

  @SpeakeasyMetadata()
  getReportPkLog400ApplicationJsonObject?: GetReportPkLog400ApplicationJson;

  @SpeakeasyMetadata()
  getReportPkLog401ApplicationJsonObject?: GetReportPkLog401ApplicationJson;

  @SpeakeasyMetadata()
  getReportPkLog422ApplicationJsonObject?: GetReportPkLog422ApplicationJson;

  @SpeakeasyMetadata()
  getReportPkLog500ApplicationJsonObject?: GetReportPkLog500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
