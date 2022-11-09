import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IncomeVerificationRefreshRequest extends SpeakeasyBase {
    request: shared.IncomeVerificationRefreshRequest;
}
export declare class IncomeVerificationRefreshResponse extends SpeakeasyBase {
    contentType: string;
    error?: Map<string, any>;
    incomeVerificationRefreshResponse?: shared.IncomeVerificationRefreshResponse;
    statusCode: number;
}
