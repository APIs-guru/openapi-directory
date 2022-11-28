import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSourceAccountsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    payorId?: string;
    physicalAccountName?: string;
    sort?: string;
}
export declare class GetSourceAccountsRequest extends SpeakeasyBase {
    queryParams: GetSourceAccountsQueryParams;
}
export declare class GetSourceAccountsResponse extends SpeakeasyBase {
    contentType: string;
    listSourceAccountResponse?: shared.ListSourceAccountResponse;
    statusCode: number;
    inlineResponse401?: any;
}
