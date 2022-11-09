import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IncomeVerificationPaystubsGetRequest
/** 
 * IncomeVerificationPaystubsGetRequest defines the request schema for `/income/verification/paystubs/get`.
**/
export class IncomeVerificationPaystubsGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=income_verification_id" })
  incomeVerificationId: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
