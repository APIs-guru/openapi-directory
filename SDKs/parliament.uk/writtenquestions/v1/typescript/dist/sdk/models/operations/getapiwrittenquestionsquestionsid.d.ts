import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiWrittenquestionsQuestionsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiWrittenquestionsQuestionsIdQueryParams extends SpeakeasyBase {
    expandMember?: boolean;
}
export declare class GetApiWrittenquestionsQuestionsIdRequest extends SpeakeasyBase {
    pathParams: GetApiWrittenquestionsQuestionsIdPathParams;
    queryParams: GetApiWrittenquestionsQuestionsIdQueryParams;
}
export declare class GetApiWrittenquestionsQuestionsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, Map<string, any>>;
    questionsViewModelItem?: shared.QuestionsViewModelItem;
    statusCode: number;
}
