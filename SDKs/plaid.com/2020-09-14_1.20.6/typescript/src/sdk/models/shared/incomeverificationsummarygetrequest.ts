import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IncomeVerificationSummaryGetRequest
/** 
 * IncomeVerificationSummaryGetRequest defines the request schema for `/income/verification/summary/get`.
**/
export class IncomeVerificationSummaryGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=income_verification_id" })
  incomeVerificationId: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
