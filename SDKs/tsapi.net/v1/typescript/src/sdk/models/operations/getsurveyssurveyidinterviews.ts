import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSurveysSurveyIdInterviewsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=surveyId" })
  surveyId: string;
}


export class GetSurveysSurveyIdInterviewsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxLength" })
  maxLength?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetSurveysSurveyIdInterviewsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSurveysSurveyIdInterviewsPathParams;

  @Metadata()
  queryParams: GetSurveysSurveyIdInterviewsQueryParams;
}


export class GetSurveysSurveyIdInterviewsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Interview })
  interviews?: shared.Interview[];

  @Metadata()
  statusCode: number;
}
