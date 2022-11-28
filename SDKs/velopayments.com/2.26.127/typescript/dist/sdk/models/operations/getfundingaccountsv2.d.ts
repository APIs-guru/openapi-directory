import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFundingAccountsV2QueryParams extends SpeakeasyBase {
    country?: string;
    currency?: string;
    name?: string;
    page?: number;
    pageSize?: number;
    payorId?: string;
    sensitive?: boolean;
    sort?: string;
    type?: shared.FundingAccountTypeEnum;
}
export declare class GetFundingAccountsV2Request extends SpeakeasyBase {
    queryParams: GetFundingAccountsV2QueryParams;
}
export declare class GetFundingAccountsV2Response extends SpeakeasyBase {
    contentType: string;
    listFundingAccountsResponse2?: shared.ListFundingAccountsResponse2;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse403?: any;
}
