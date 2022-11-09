import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetChartDataCacheKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cache_key" })
  cacheKey: string;
}


export class GetChartDataCacheKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartDataCacheKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetChartDataCacheKeyPathParams;

  @Metadata()
  security: GetChartDataCacheKeySecurity;
}


export class GetChartDataCacheKey400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartDataCacheKey401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartDataCacheKey404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartDataCacheKey422ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartDataCacheKey500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartDataCacheKeyResponse extends SpeakeasyBase {
  @Metadata()
  chartDataResponseSchema?: shared.ChartDataResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  getChartDataCacheKey400ApplicationJsonObject?: GetChartDataCacheKey400ApplicationJson;

  @Metadata()
  getChartDataCacheKey401ApplicationJsonObject?: GetChartDataCacheKey401ApplicationJson;

  @Metadata()
  getChartDataCacheKey404ApplicationJsonObject?: GetChartDataCacheKey404ApplicationJson;

  @Metadata()
  getChartDataCacheKey422ApplicationJsonObject?: GetChartDataCacheKey422ApplicationJson;

  @Metadata()
  getChartDataCacheKey500ApplicationJsonObject?: GetChartDataCacheKey500ApplicationJson;

  @Metadata()
  statusCode: number;
}
