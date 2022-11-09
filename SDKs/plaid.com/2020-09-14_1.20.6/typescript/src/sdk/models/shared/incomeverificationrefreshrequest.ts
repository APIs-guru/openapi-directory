import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IncomeVerificationRefreshRequest
/** 
 * IncomeVerificationRefreshRequest defines the request schema for `/income/verification/refresh`
**/
export class IncomeVerificationRefreshRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=income_verification_id" })
  incomeVerificationId: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
