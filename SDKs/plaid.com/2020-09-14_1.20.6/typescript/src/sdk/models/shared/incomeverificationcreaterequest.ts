import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IncomeVerificationCreateRequest
/** 
 * IncomeVerificationCreateRequest defines the request schema for `/income/verification/create`
**/
export class IncomeVerificationCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook" })
  webhook: string;
}
