import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiMembersIdWrittenQuestionsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiMembersIdWrittenQuestionsQueryParams extends SpeakeasyBase {
    page?: number;
}
export declare class GetApiMembersIdWrittenQuestionsRequest extends SpeakeasyBase {
    pathParams: GetApiMembersIdWrittenQuestionsPathParams;
    queryParams: GetApiMembersIdWrittenQuestionsQueryParams;
}
export declare class GetApiMembersIdWrittenQuestionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    writtenQuestionMembersServiceSearchResult?: shared.WrittenQuestionMembersServiceSearchResult;
}
