import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BankAccount } from "./bankaccount";
import { Error } from "./error";


// GetBankAccountResponse
/** 
 * Response object returned by `GetBankAccount`.
**/
export class GetBankAccountResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bank_account" })
  bankAccount?: BankAccount;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
