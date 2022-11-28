import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChartDataCacheKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cache_key" })
  cacheKey: string;
}


export class GetChartDataCacheKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class GetChartDataCacheKey400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartDataCacheKey401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartDataCacheKey404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartDataCacheKey422ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartDataCacheKey500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetChartDataCacheKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChartDataCacheKeyPathParams;

  @SpeakeasyMetadata()
  security: GetChartDataCacheKeySecurity;
}


export class GetChartDataCacheKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chartDataResponseSchema?: shared.ChartDataResponseSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getChartDataCacheKey400ApplicationJsonObject?: GetChartDataCacheKey400ApplicationJson;

  @SpeakeasyMetadata()
  getChartDataCacheKey401ApplicationJsonObject?: GetChartDataCacheKey401ApplicationJson;

  @SpeakeasyMetadata()
  getChartDataCacheKey404ApplicationJsonObject?: GetChartDataCacheKey404ApplicationJson;

  @SpeakeasyMetadata()
  getChartDataCacheKey422ApplicationJsonObject?: GetChartDataCacheKey422ApplicationJson;

  @SpeakeasyMetadata()
  getChartDataCacheKey500ApplicationJsonObject?: GetChartDataCacheKey500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
