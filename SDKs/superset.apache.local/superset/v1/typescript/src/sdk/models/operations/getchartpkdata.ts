import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChartPkDataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetChartPkDataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetChartPkDataSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartPkDataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChartPkDataPathParams;

  @Metadata()
  queryParams: GetChartPkDataQueryParams;

  @Metadata()
  security: GetChartPkDataSecurity;
}


export class GetChartPkData400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkData401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkData500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkDataResponse extends SpeakeasyBase {
  @Metadata()
  chartDataAsyncResponseSchema?: shared.ChartDataAsyncResponseSchema;

  @Metadata()
  chartDataResponseSchema?: shared.ChartDataResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  getChartPkData400ApplicationJsonObject?: GetChartPkData400ApplicationJson;

  @Metadata()
  getChartPkData401ApplicationJsonObject?: GetChartPkData401ApplicationJson;

  @Metadata()
  getChartPkData500ApplicationJsonObject?: GetChartPkData500ApplicationJson;

  @Metadata()
  statusCode: number;
}
