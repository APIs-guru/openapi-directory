import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BankTransferEventSyncRequest
/** 
 * BankTransferEventSyncRequest defines the request schema for `/bank_transfer/event/sync`
**/
export class BankTransferEventSyncRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=after_id" })
  afterId: number;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
