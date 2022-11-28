import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrainedModelMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class GetTrainedModelMetricsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainedModelMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrainedModelMetricsPathParams;

  @SpeakeasyMetadata()
  security: GetTrainedModelMetricsSecurity;
}


export class GetTrainedModelMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  metrics?: shared.Metrics;

  @SpeakeasyMetadata()
  statusCode: number;
}
