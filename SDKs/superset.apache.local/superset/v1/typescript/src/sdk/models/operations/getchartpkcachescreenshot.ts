import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChartPkCacheScreenshotPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pk" })
  pk: number;
}


export class GetChartPkCacheScreenshotQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, serialization=json;name=q" })
  q?: shared.ScreenshotQuerySchema;
}


export class GetChartPkCacheScreenshotSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartPkCacheScreenshotRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChartPkCacheScreenshotPathParams;

  @Metadata()
  queryParams: GetChartPkCacheScreenshotQueryParams;

  @Metadata()
  security: GetChartPkCacheScreenshotSecurity;
}


export class GetChartPkCacheScreenshot400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkCacheScreenshot401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkCacheScreenshot404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkCacheScreenshot500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartPkCacheScreenshotResponse extends SpeakeasyBase {
  @Metadata()
  chartCacheScreenshotResponseSchema?: shared.ChartCacheScreenshotResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  getChartPkCacheScreenshot400ApplicationJsonObject?: GetChartPkCacheScreenshot400ApplicationJson;

  @Metadata()
  getChartPkCacheScreenshot401ApplicationJsonObject?: GetChartPkCacheScreenshot401ApplicationJson;

  @Metadata()
  getChartPkCacheScreenshot404ApplicationJsonObject?: GetChartPkCacheScreenshot404ApplicationJson;

  @Metadata()
  getChartPkCacheScreenshot500ApplicationJsonObject?: GetChartPkCacheScreenshot500ApplicationJson;

  @Metadata()
  statusCode: number;
}
