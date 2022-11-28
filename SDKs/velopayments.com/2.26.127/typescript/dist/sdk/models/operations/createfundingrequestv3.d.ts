import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFundingRequestV3PathParams extends SpeakeasyBase {
    sourceAccountId: string;
}
export declare class CreateFundingRequestV3Request extends SpeakeasyBase {
    pathParams: CreateFundingRequestV3PathParams;
    request: shared.FundingRequestV3;
}
export declare class CreateFundingRequestV3Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
