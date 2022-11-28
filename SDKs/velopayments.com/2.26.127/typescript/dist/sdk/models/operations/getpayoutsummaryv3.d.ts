import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayoutSummaryV3PathParams extends SpeakeasyBase {
    payoutId: string;
}
export declare class GetPayoutSummaryV3Request extends SpeakeasyBase {
    pathParams: GetPayoutSummaryV3PathParams;
}
export declare class GetPayoutSummaryV3Response extends SpeakeasyBase {
    contentType: string;
    payoutSummaryResponseV3?: shared.PayoutSummaryResponseV3;
    statusCode: number;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
