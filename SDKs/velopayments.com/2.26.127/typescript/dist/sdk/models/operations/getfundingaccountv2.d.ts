import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFundingAccountV2PathParams extends SpeakeasyBase {
    fundingAccountId: string;
}
export declare class GetFundingAccountV2QueryParams extends SpeakeasyBase {
    sensitive?: boolean;
}
export declare class GetFundingAccountV2Request extends SpeakeasyBase {
    pathParams: GetFundingAccountV2PathParams;
    queryParams: GetFundingAccountV2QueryParams;
}
export declare class GetFundingAccountV2Response extends SpeakeasyBase {
    contentType: string;
    fundingAccountResponse2?: shared.FundingAccountResponse2;
    statusCode: number;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
