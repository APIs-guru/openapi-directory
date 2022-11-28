import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BankTransferMigrateAccountRequest
/** 
 * BankTransferMigrateAccountRequest defines the request schema for `/bank_transfer/migrate_account`
**/
export class BankTransferMigrateAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=account_type" })
  accountType: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=routing_number" })
  routingNumber: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
