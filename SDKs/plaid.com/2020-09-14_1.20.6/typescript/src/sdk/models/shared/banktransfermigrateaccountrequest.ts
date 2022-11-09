import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BankTransferMigrateAccountRequest
/** 
 * BankTransferMigrateAccountRequest defines the request schema for `/bank_transfer/migrate_account`
**/
export class BankTransferMigrateAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_number" })
  accountNumber: string;

  @Metadata({ data: "json, name=account_type" })
  accountType: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=routing_number" })
  routingNumber: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
