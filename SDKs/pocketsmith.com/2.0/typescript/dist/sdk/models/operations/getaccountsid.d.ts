import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetAccountsIdRequest extends SpeakeasyBase {
    pathParams: GetAccountsIdPathParams;
}
export declare class GetAccountsIdResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
