import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChartPkDataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetChartPkDataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetChartPkDataSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartPkData400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkData401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkData500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChartPkDataPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChartPkDataQueryParams;

  @SpeakeasyMetadata()
  security: GetChartPkDataSecurity;
}


export class GetChartPkDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chartDataAsyncResponseSchema?: shared.ChartDataAsyncResponseSchema;

  @SpeakeasyMetadata()
  chartDataResponseSchema?: shared.ChartDataResponseSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getChartPkData400ApplicationJsonObject?: GetChartPkData400ApplicationJson;

  @SpeakeasyMetadata()
  getChartPkData401ApplicationJsonObject?: GetChartPkData401ApplicationJson;

  @SpeakeasyMetadata()
  getChartPkData500ApplicationJsonObject?: GetChartPkData500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
