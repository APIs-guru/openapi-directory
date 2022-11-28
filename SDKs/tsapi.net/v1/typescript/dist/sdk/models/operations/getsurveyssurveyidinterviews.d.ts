import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSurveysSurveyIdInterviewsPathParams extends SpeakeasyBase {
    surveyId: string;
}
export declare class GetSurveysSurveyIdInterviewsQueryParams extends SpeakeasyBase {
    maxLength?: number;
    start?: number;
}
export declare class GetSurveysSurveyIdInterviewsRequest extends SpeakeasyBase {
    pathParams: GetSurveysSurveyIdInterviewsPathParams;
    queryParams: GetSurveysSurveyIdInterviewsQueryParams;
}
export declare class GetSurveysSurveyIdInterviewsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    interviews?: shared.Interview[];
    statusCode: number;
}
