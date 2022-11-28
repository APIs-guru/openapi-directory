import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSurveyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SurveyId" })
  surveyId: string;
}


export class GetSurveyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSurveyPathParams;
}


export class GetSurveyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  surveyResponse?: Map<string, any>;
}
