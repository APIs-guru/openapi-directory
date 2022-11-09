import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSurveysSurveyIdMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=surveyId" })
  surveyId: string;
}


export class GetSurveysSurveyIdMetadataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSurveysSurveyIdMetadataPathParams;
}


export class GetSurveysSurveyIdMetadataResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  surveyMetadata?: shared.SurveyMetadata;
}
