import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUsersIdAccountsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutUsersIdAccountsRequestBody extends SpeakeasyBase {
    accounts: shared.Account[];
}
export declare class PutUsersIdAccountsRequest extends SpeakeasyBase {
    pathParams: PutUsersIdAccountsPathParams;
    request?: PutUsersIdAccountsRequestBody;
}
export declare class PutUsersIdAccountsResponse extends SpeakeasyBase {
    accounts?: shared.Account[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
