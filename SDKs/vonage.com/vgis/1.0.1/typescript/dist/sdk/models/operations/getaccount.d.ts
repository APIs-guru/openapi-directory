import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAccountResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
