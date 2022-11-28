import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFundingAccountsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    payorId?: string;
    sensitive?: boolean;
    sort?: string;
    sourceAccountId?: string;
}
export declare class GetFundingAccountsRequest extends SpeakeasyBase {
    queryParams: GetFundingAccountsQueryParams;
}
export declare class GetFundingAccountsResponse extends SpeakeasyBase {
    contentType: string;
    listFundingAccountsResponse?: shared.ListFundingAccountsResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse403?: any;
}
