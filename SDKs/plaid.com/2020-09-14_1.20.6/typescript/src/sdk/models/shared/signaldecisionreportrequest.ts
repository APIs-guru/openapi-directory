import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignalDecisionReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=client_transaction_id" })
  clientTransactionId: string;

  @Metadata({ data: "json, name=initiated" })
  initiated: boolean;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
