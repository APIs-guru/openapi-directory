import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BankTransferEventSyncRequest
/** 
 * BankTransferEventSyncRequest defines the request schema for `/bank_transfer/event/sync`
**/
export class BankTransferEventSyncRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=after_id" })
  afterId: number;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
