import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IncomeVerificationCreateRequest
/** 
 * IncomeVerificationCreateRequest defines the request schema for `/income/verification/create`
**/
export class IncomeVerificationCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=webhook" })
  webhook: string;
}
