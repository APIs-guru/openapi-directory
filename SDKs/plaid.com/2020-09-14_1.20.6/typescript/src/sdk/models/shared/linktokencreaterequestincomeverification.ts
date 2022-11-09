import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinkTokenCreateRequestIncomeVerification
/** 
 * Specifies options for initializing Link for use with the Income (beta) product. This field is required if `income_verification` is included in the `products` array.
**/
export class LinkTokenCreateRequestIncomeVerification extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset_report_id" })
  assetReportId?: string;

  @Metadata({ data: "json, name=income_verification_id" })
  incomeVerificationId: string;
}
