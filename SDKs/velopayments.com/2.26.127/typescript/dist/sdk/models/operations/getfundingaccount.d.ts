import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFundingAccountPathParams extends SpeakeasyBase {
    fundingAccountId: string;
}
export declare class GetFundingAccountQueryParams extends SpeakeasyBase {
    sensitive?: boolean;
}
export declare class GetFundingAccountRequest extends SpeakeasyBase {
    pathParams: GetFundingAccountPathParams;
    queryParams: GetFundingAccountQueryParams;
}
export declare class GetFundingAccountResponse extends SpeakeasyBase {
    contentType: string;
    fundingAccountResponse?: shared.FundingAccountResponse;
    statusCode: number;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
