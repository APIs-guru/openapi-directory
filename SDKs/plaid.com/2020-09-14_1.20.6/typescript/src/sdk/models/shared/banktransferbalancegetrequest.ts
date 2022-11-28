import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BankTransferBalanceGetRequest
/** 
 * BankTransferBalanceGetRequest defines the request schema for `/bank_transfer/balance/get`
**/
export class BankTransferBalanceGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=origination_account_id" })
  originationAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
