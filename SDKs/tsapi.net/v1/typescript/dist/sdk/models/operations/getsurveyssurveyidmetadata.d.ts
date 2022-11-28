import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSurveysSurveyIdMetadataPathParams extends SpeakeasyBase {
    surveyId: string;
}
export declare class GetSurveysSurveyIdMetadataRequest extends SpeakeasyBase {
    pathParams: GetSurveysSurveyIdMetadataPathParams;
}
export declare class GetSurveysSurveyIdMetadataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    surveyMetadata?: shared.SurveyMetadata;
}
