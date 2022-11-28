import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrainedModelLearningCurvePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class GetTrainedModelLearningCurveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetTrainedModelLearningCurveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainedModelLearningCurveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrainedModelLearningCurvePathParams;

  @SpeakeasyMetadata()
  queryParams: GetTrainedModelLearningCurveQueryParams;

  @SpeakeasyMetadata()
  security: GetTrainedModelLearningCurveSecurity;
}


export class GetTrainedModelLearningCurveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  learningCurveList?: shared.LearningCurveList;

  @SpeakeasyMetadata()
  statusCode: number;
}
