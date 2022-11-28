import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountByIdPathParams extends SpeakeasyBase {
    accountId: string;
    budgetId: string;
}
export declare class GetAccountByIdRequest extends SpeakeasyBase {
    pathParams: GetAccountByIdPathParams;
}
export declare class GetAccountByIdResponse extends SpeakeasyBase {
    accountResponse?: shared.AccountResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
