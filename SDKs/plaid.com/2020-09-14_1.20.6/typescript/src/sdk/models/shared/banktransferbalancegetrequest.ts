import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BankTransferBalanceGetRequest
/** 
 * BankTransferBalanceGetRequest defines the request schema for `/bank_transfer/balance/get`
**/
export class BankTransferBalanceGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=origination_account_id" })
  originationAccountId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
