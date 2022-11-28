import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrainedModelLearningCurve1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class GetTrainedModelLearningCurve1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetTrainedModelLearningCurve1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainedModelLearningCurve1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrainedModelLearningCurve1PathParams;

  @SpeakeasyMetadata()
  queryParams: GetTrainedModelLearningCurve1QueryParams;

  @SpeakeasyMetadata()
  security: GetTrainedModelLearningCurve1Security;
}


export class GetTrainedModelLearningCurve1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  learningCurveList?: shared.LearningCurveList;

  @SpeakeasyMetadata()
  statusCode: number;
}
