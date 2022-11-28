import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountsQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetAccountsRequest extends SpeakeasyBase {
    queryParams: GetAccountsQueryParams;
}
export declare class GetAccountsResponse extends SpeakeasyBase {
    contentType: string;
    listAccountsResponse?: shared.ListAccountsResponse;
    statusCode: number;
}
