import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SandboxBankTransferSimulateRequest
/** 
 * SandboxBankTransferSimulateRequest defines the request schema for `/sandbox/bank_transfer/simulate`
**/
export class SandboxBankTransferSimulateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bank_transfer_id" })
  bankTransferId: string;

  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=event_type" })
  eventType: string;

  @SpeakeasyMetadata({ data: "json, name=failure_reason" })
  failureReason?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
