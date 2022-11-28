import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSurveysSurveyIdMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=surveyId" })
  surveyId: string;
}


export class GetSurveysSurveyIdMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSurveysSurveyIdMetadataPathParams;
}


export class GetSurveysSurveyIdMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  surveyMetadata?: shared.SurveyMetadata;
}
