import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies options for initializing Link for use with the Income (beta) product. This field is required if `income_verification` is included in the `products` array.
**/
export declare class LinkTokenCreateRequestIncomeVerification extends SpeakeasyBase {
    assetReportId?: string;
    incomeVerificationId: string;
}
