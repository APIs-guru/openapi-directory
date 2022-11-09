import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SandboxBankTransferSimulateRequest
/** 
 * SandboxBankTransferSimulateRequest defines the request schema for `/sandbox/bank_transfer/simulate`
**/
export class SandboxBankTransferSimulateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=bank_transfer_id" })
  bankTransferId: string;

  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=event_type" })
  eventType: string;

  @Metadata({ data: "json, name=failure_reason" })
  failureReason?: Map<string, any>;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
