import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiWrittenquestionsQuestionsQueryParams extends SpeakeasyBase {
    answered?: shared.AnsweredEnum;
    answeredWhenFrom?: Date;
    answeredWhenTo?: Date;
    answeringBodies?: number[];
    answeringMemberId?: number;
    askingMemberId?: number;
    correctedWhenFrom?: Date;
    correctedWhenTo?: Date;
    expandMember?: boolean;
    house?: shared.HouseEnumEnum;
    includeWithdrawn?: boolean;
    members?: number[];
    questionStatus?: shared.QuestionStatusEnumEnum;
    searchTerm?: string;
    skip?: number;
    tabledWhenFrom?: Date;
    tabledWhenTo?: Date;
    take?: number;
    uIn?: string;
}
export declare class GetApiWrittenquestionsQuestionsRequest extends SpeakeasyBase {
    queryParams: GetApiWrittenquestionsQuestionsQueryParams;
}
export declare class GetApiWrittenquestionsQuestionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, Map<string, any>>;
    questionsViewModelSearchResult?: shared.QuestionsViewModelSearchResult;
    statusCode: number;
}
