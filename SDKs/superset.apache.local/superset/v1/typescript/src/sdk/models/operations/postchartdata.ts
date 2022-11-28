import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostChartDataSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostChartData400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartData401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartData500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ChartDataQueryContextSchema;

  @SpeakeasyMetadata()
  security: PostChartDataSecurity;
}


export class PostChartDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chartDataAsyncResponseSchema?: shared.ChartDataAsyncResponseSchema;

  @SpeakeasyMetadata()
  chartDataResponseSchema?: shared.ChartDataResponseSchema;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postChartData400ApplicationJsonObject?: PostChartData400ApplicationJson;

  @SpeakeasyMetadata()
  postChartData401ApplicationJsonObject?: PostChartData401ApplicationJson;

  @SpeakeasyMetadata()
  postChartData500ApplicationJsonObject?: PostChartData500ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
