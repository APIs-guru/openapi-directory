import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrainedModelMetrics1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class GetTrainedModelMetrics1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainedModelMetrics1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrainedModelMetrics1PathParams;

  @SpeakeasyMetadata()
  security: GetTrainedModelMetrics1Security;
}


export class GetTrainedModelMetrics1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  metrics?: shared.Metrics;

  @SpeakeasyMetadata()
  statusCode: number;
}
