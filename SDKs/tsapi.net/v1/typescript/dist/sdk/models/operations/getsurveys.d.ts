import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSurveysResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    surveyDetails?: shared.SurveyDetail[];
}
