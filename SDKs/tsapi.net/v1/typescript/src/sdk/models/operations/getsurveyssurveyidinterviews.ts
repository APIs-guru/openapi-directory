import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSurveysSurveyIdInterviewsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=surveyId" })
  surveyId: string;
}


export class GetSurveysSurveyIdInterviewsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxLength" })
  maxLength?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetSurveysSurveyIdInterviewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSurveysSurveyIdInterviewsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSurveysSurveyIdInterviewsQueryParams;
}


export class GetSurveysSurveyIdInterviewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Interview })
  interviews?: shared.Interview[];

  @SpeakeasyMetadata()
  statusCode: number;
}
