import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishedOralQuestionTimeGetQueryParams extends SpeakeasyBase {
    parametersAnsweringBodyIds?: number[];
    parametersAnsweringDateEnd?: Date;
    parametersAnsweringDateStart?: Date;
    parametersDeadlineDateEnd?: Date;
    parametersDeadlineDateStart?: Date;
    parametersOralQuestionTimeId?: number;
    parametersSkip?: number;
    parametersTake?: number;
}
export declare class PublishedOralQuestionTimeGetRequest extends SpeakeasyBase {
    queryParams: PublishedOralQuestionTimeGetQueryParams;
}
export declare class PublishedOralQuestionTimeGetResponse extends SpeakeasyBase {
    apiResponseListPublishedWrittenQuestion?: shared.ApiResponseListPublishedWrittenQuestion;
    apiResponseObject?: shared.ApiResponseObject;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
