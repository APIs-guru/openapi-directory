import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTrainedModelMetricsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class GetTrainedModelMetricsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainedModelMetricsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTrainedModelMetricsPathParams;

  @Metadata()
  security: GetTrainedModelMetricsSecurity;
}


export class GetTrainedModelMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  metrics?: shared.Metrics;

  @Metadata()
  statusCode: number;
}
