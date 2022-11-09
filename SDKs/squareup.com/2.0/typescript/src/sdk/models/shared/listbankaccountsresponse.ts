import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BankAccount } from "./bankaccount";
import { Error } from "./error";


// ListBankAccountsResponse
/** 
 * Response object returned by ListBankAccounts.
**/
export class ListBankAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bank_accounts", elemType: shared.BankAccount })
  bankAccounts?: BankAccount[];

  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
