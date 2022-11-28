import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinkTokenCreateRequestIncomeVerification
/** 
 * Specifies options for initializing Link for use with the Income (beta) product. This field is required if `income_verification` is included in the `products` array.
**/
export class LinkTokenCreateRequestIncomeVerification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset_report_id" })
  assetReportId?: string;

  @SpeakeasyMetadata({ data: "json, name=income_verification_id" })
  incomeVerificationId: string;
}
