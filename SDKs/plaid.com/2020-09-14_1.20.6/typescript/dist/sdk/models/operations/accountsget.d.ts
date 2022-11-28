import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccountsGetRequest extends SpeakeasyBase {
    request: shared.AccountsGetRequest;
}
export declare class AccountsGetResponse extends SpeakeasyBase {
    accountsGetResponse?: Map<string, any>;
    contentType: string;
    error?: Map<string, any>;
    statusCode: number;
}
