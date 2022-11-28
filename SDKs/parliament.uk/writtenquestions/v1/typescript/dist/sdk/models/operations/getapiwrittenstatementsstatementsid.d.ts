import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiWrittenstatementsStatementsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiWrittenstatementsStatementsIdQueryParams extends SpeakeasyBase {
    expandMember?: boolean;
}
export declare class GetApiWrittenstatementsStatementsIdRequest extends SpeakeasyBase {
    pathParams: GetApiWrittenstatementsStatementsIdPathParams;
    queryParams: GetApiWrittenstatementsStatementsIdQueryParams;
}
export declare class GetApiWrittenstatementsStatementsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, Map<string, any>>;
    statementsViewModelSearchResult?: shared.StatementsViewModelSearchResult;
    statusCode: number;
}
