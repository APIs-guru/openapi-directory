import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTrainedModelLearningCurvePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class GetTrainedModelLearningCurveQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetTrainedModelLearningCurveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainedModelLearningCurveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTrainedModelLearningCurvePathParams;

  @Metadata()
  queryParams: GetTrainedModelLearningCurveQueryParams;

  @Metadata()
  security: GetTrainedModelLearningCurveSecurity;
}


export class GetTrainedModelLearningCurveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  learningCurveList?: shared.LearningCurveList;

  @Metadata()
  statusCode: number;
}
