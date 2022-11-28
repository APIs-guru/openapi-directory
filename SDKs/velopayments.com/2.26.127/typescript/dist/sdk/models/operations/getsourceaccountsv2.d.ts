import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSourceAccountsV2QueryParams extends SpeakeasyBase {
    fundingAccountId?: string;
    page?: number;
    pageSize?: number;
    payorId?: string;
    physicalAccountId?: string;
    physicalAccountName?: string;
    sort?: string;
}
export declare class GetSourceAccountsV2Request extends SpeakeasyBase {
    queryParams: GetSourceAccountsV2QueryParams;
}
export declare class GetSourceAccountsV2Response extends SpeakeasyBase {
    contentType: string;
    listSourceAccountResponseV2?: shared.ListSourceAccountResponseV2;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
