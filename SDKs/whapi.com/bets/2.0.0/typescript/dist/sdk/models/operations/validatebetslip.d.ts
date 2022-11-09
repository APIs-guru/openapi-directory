import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ValidateBetslipQueryParams extends SpeakeasyBase {
    expanded?: string;
}
export declare class ValidateBetslipHeaders extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
}
export declare class ValidateBetslipRequest extends SpeakeasyBase {
    queryParams: ValidateBetslipQueryParams;
    headers: ValidateBetslipHeaders;
    request: shared.BetSlipRequest;
}
export declare class ValidateBetslipResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    betSlipResponse?: shared.BetSlipResponse;
}
