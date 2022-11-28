import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiWrittenstatementsStatementsDateUinPathParams extends SpeakeasyBase {
    date: Date;
    uin: string;
}
export declare class GetApiWrittenstatementsStatementsDateUinQueryParams extends SpeakeasyBase {
    expandMember?: boolean;
}
export declare class GetApiWrittenstatementsStatementsDateUinRequest extends SpeakeasyBase {
    pathParams: GetApiWrittenstatementsStatementsDateUinPathParams;
    queryParams: GetApiWrittenstatementsStatementsDateUinQueryParams;
}
export declare class GetApiWrittenstatementsStatementsDateUinResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, Map<string, any>>;
    statementsViewModelItem?: shared.StatementsViewModelItem;
    statusCode: number;
}
