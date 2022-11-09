import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostChartDataSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  jwt: shared.SchemeJwt;
}


export class PostChartDataRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ChartDataQueryContextSchema;

  @Metadata()
  security: PostChartDataSecurity;
}


export class PostChartData400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartData401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartData500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostChartDataResponse extends SpeakeasyBase {
  @Metadata()
  chartDataAsyncResponseSchema?: shared.ChartDataAsyncResponseSchema;

  @Metadata()
  chartDataResponseSchema?: shared.ChartDataResponseSchema;

  @Metadata()
  contentType: string;

  @Metadata()
  postChartData400ApplicationJsonObject?: PostChartData400ApplicationJson;

  @Metadata()
  postChartData401ApplicationJsonObject?: PostChartData401ApplicationJson;

  @Metadata()
  postChartData500ApplicationJsonObject?: PostChartData500ApplicationJson;

  @Metadata()
  statusCode: number;
}
