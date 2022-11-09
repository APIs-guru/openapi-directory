import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTrainedModelMetrics1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class GetTrainedModelMetrics1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainedModelMetrics1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTrainedModelMetrics1PathParams;

  @Metadata()
  security: GetTrainedModelMetrics1Security;
}


export class GetTrainedModelMetrics1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  metrics?: shared.Metrics;

  @Metadata()
  statusCode: number;
}
