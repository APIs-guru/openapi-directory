import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IncomeVerificationSummaryGetRequest
/** 
 * IncomeVerificationSummaryGetRequest defines the request schema for `/income/verification/summary/get`.
**/
export class IncomeVerificationSummaryGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=income_verification_id" })
  incomeVerificationId: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
