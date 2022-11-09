import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSurveyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=SurveyId" })
  surveyId: string;
}


export class GetSurveyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSurveyPathParams;
}


export class GetSurveyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  surveyResponse?: Map<string, any>;
}
