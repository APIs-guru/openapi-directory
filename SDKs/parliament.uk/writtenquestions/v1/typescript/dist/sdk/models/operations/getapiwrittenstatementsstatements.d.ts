import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiWrittenstatementsStatementsQueryParams extends SpeakeasyBase {
    answeringBodies?: number[];
    expandMember?: boolean;
    house?: shared.HouseEnumEnum;
    madeWhenFrom?: Date;
    madeWhenTo?: Date;
    members?: number[];
    searchTerm?: string;
    skip?: number;
    take?: number;
    uIn?: string;
}
export declare class GetApiWrittenstatementsStatementsRequest extends SpeakeasyBase {
    queryParams: GetApiWrittenstatementsStatementsQueryParams;
}
export declare class GetApiWrittenstatementsStatementsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, Map<string, any>>;
    statementsViewModelSearchResult?: shared.StatementsViewModelSearchResult;
    statusCode: number;
}
