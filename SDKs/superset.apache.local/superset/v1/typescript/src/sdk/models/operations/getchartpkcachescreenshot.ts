import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChartPkCacheScreenshotPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetChartPkCacheScreenshotQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.ScreenshotQuerySchema;
}


export class GetChartPkCacheScreenshotSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartPkCacheScreenshot400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkCacheScreenshot401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkCacheScreenshot404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkCacheScreenshot500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkCacheScreenshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChartPkCacheScreenshotPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChartPkCacheScreenshotQueryParams;

  @SpeakeasyMetadata()
  security: GetChartPkCacheScreenshotSecurity;
}


export class GetChartPkCacheScreenshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chartCacheScreenshotResponseSchema?: shared.ChartCacheScreenshotResponseSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getChartPkCacheScreenshot400ApplicationJsonObject?: GetChartPkCacheScreenshot400ApplicationJson;

  @SpeakeasyMetadata()
  getChartPkCacheScreenshot401ApplicationJsonObject?: GetChartPkCacheScreenshot401ApplicationJson;

  @SpeakeasyMetadata()
  getChartPkCacheScreenshot404ApplicationJsonObject?: GetChartPkCacheScreenshot404ApplicationJson;

  @SpeakeasyMetadata()
  getChartPkCacheScreenshot500ApplicationJsonObject?: GetChartPkCacheScreenshot500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
