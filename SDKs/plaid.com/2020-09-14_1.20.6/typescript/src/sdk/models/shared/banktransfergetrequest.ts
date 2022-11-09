import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BankTransferGetRequest
/** 
 * BankTransferGetRequest defines the request schema for `/bank_transfer/get`
**/
export class BankTransferGetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bank_transfer_id" })
  bankTransferId: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
