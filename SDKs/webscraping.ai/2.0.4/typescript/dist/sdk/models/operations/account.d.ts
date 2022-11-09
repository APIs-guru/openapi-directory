import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AccountResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
