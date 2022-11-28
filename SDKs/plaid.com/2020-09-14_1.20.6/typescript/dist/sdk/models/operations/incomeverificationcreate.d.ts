import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IncomeVerificationCreateRequest extends SpeakeasyBase {
    request: shared.IncomeVerificationCreateRequest;
}
export declare class IncomeVerificationCreateResponse extends SpeakeasyBase {
    contentType: string;
    incomeVerificationCreateResponse?: Map<string, any>;
    statusCode: number;
}
