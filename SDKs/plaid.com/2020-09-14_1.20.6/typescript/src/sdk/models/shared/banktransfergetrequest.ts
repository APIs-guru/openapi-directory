import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BankTransferGetRequest
/** 
 * BankTransferGetRequest defines the request schema for `/bank_transfer/get`
**/
export class BankTransferGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bank_transfer_id" })
  bankTransferId: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
