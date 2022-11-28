import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAccountPathParams extends SpeakeasyBase {
    budgetId: string;
}
export declare class CreateAccountRequest extends SpeakeasyBase {
    pathParams: CreateAccountPathParams;
    request: shared.SaveAccountWrapper;
}
export declare class CreateAccountResponse extends SpeakeasyBase {
    accountResponse?: shared.AccountResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
