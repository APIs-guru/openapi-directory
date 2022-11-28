import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiWrittenquestionsQuestionsDateUinPathParams extends SpeakeasyBase {
    date: Date;
    uin: string;
}
export declare class GetApiWrittenquestionsQuestionsDateUinQueryParams extends SpeakeasyBase {
    expandMember?: boolean;
}
export declare class GetApiWrittenquestionsQuestionsDateUinRequest extends SpeakeasyBase {
    pathParams: GetApiWrittenquestionsQuestionsDateUinPathParams;
    queryParams: GetApiWrittenquestionsQuestionsDateUinQueryParams;
}
export declare class GetApiWrittenquestionsQuestionsDateUinResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, Map<string, any>>;
    questionsViewModelItem?: shared.QuestionsViewModelItem;
    statusCode: number;
}
