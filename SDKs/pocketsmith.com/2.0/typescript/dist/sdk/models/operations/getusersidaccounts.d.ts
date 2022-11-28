import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersIdAccountsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdAccountsRequest extends SpeakeasyBase {
    pathParams: GetUsersIdAccountsPathParams;
}
export declare class GetUsersIdAccountsResponse extends SpeakeasyBase {
    accounts?: shared.Account[];
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
