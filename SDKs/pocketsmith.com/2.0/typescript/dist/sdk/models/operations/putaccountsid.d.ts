import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAccountsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutAccountsIdRequestBody extends SpeakeasyBase {
    currencyCode?: string;
    title?: string;
}
export declare class PutAccountsIdRequest extends SpeakeasyBase {
    pathParams: PutAccountsIdPathParams;
    request?: PutAccountsIdRequestBody;
}
export declare class PutAccountsIdResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
