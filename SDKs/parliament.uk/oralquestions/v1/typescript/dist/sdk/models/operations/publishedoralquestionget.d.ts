import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PublishedOralQuestionGetParametersQuestionTypeEnum {
    Substantive = "Substantive",
    Topical = "Topical"
}
export declare class PublishedOralQuestionGetQueryParams extends SpeakeasyBase {
    parametersAnsweringBodyIds?: number[];
    parametersAnsweringDateEnd?: Date;
    parametersAnsweringDateStart?: Date;
    parametersAskingMemberIds?: number[];
    parametersOralQuestionTimeId?: number;
    parametersQuestionType?: PublishedOralQuestionGetParametersQuestionTypeEnum;
    parametersSkip?: number;
    parametersTake?: number;
    parametersUINs?: number[];
}
export declare class PublishedOralQuestionGetRequest extends SpeakeasyBase {
    queryParams: PublishedOralQuestionGetQueryParams;
}
export declare class PublishedOralQuestionGetResponse extends SpeakeasyBase {
    apiResponseListPublishedWrittenQuestion?: shared.ApiResponseListPublishedWrittenQuestion;
    apiResponseObject?: shared.ApiResponseObject;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
