import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IncomeVerificationSummaryGetRequest extends SpeakeasyBase {
    request: shared.IncomeVerificationSummaryGetRequest;
}
export declare class IncomeVerificationSummaryGetResponse extends SpeakeasyBase {
    contentType: string;
    incomeVerificationSummaryGetResponse?: Map<string, any>;
    statusCode: number;
}
