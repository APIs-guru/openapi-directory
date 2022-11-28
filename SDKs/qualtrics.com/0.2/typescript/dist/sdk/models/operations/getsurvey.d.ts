import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSurveyPathParams extends SpeakeasyBase {
    surveyId: string;
}
export declare class GetSurveyRequest extends SpeakeasyBase {
    pathParams: GetSurveyPathParams;
}
export declare class GetSurveyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    surveyResponse?: Map<string, any>;
}
