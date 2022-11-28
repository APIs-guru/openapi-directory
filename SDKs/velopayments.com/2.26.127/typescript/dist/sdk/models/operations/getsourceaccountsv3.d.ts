import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSourceAccountsV3QueryParams extends SpeakeasyBase {
    fundingAccountId?: string;
    includeUserDeleted?: string;
    page?: number;
    pageSize?: number;
    payorId?: string;
    physicalAccountId?: string;
    physicalAccountName?: string;
    sort?: string;
    type?: shared.SourceAccountTypeEnum;
}
export declare class GetSourceAccountsV3Request extends SpeakeasyBase {
    queryParams: GetSourceAccountsV3QueryParams;
}
export declare class GetSourceAccountsV3Response extends SpeakeasyBase {
    contentType: string;
    listSourceAccountResponseV3?: shared.ListSourceAccountResponseV3;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
