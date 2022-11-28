import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IncomeVerificationPaystubsGetRequest
/** 
 * IncomeVerificationPaystubsGetRequest defines the request schema for `/income/verification/paystubs/get`.
**/
export class IncomeVerificationPaystubsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=income_verification_id" })
  incomeVerificationId: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
