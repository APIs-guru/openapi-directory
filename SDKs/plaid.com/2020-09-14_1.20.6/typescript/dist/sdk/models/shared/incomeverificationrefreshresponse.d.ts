import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VerificationRefreshStatusEnum } from "./verificationrefreshstatusenum";
/**
 * IncomeVerificationRequestResponse defines the response schema for `/income/verification/refresh`
**/
export declare class IncomeVerificationRefreshResponse extends SpeakeasyBase {
    requestId: string;
    verificationRefreshStatus: VerificationRefreshStatusEnum;
}
