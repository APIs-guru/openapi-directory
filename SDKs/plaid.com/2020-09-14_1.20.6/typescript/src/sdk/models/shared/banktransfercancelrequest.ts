import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BankTransferCancelRequest
/** 
 * BankTransferCancelRequest defines the request schema for `/bank_transfer/cancel`
**/
export class BankTransferCancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bank_transfer_id" })
  bankTransferId: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
