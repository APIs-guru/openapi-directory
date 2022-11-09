import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTrainedModelLearningCurve1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=modelId" })
  modelId: string;
}


export class GetTrainedModelLearningCurve1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class GetTrainedModelLearningCurve1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerToken: shared.SchemeBearerToken;
}


export class GetTrainedModelLearningCurve1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTrainedModelLearningCurve1PathParams;

  @Metadata()
  queryParams: GetTrainedModelLearningCurve1QueryParams;

  @Metadata()
  security: GetTrainedModelLearningCurve1Security;
}


export class GetTrainedModelLearningCurve1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  learningCurveList?: shared.LearningCurveList;

  @Metadata()
  statusCode: number;
}
