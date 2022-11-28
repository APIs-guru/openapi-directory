import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetAccountsIdRequest extends SpeakeasyBase {
    pathParams: GetAccountsIdPathParams;
}
export declare class GetAccountsIdResponse extends SpeakeasyBase {
    contentType: string;
    getAccountResponse?: shared.GetAccountResponse;
    statusCode: number;
}
