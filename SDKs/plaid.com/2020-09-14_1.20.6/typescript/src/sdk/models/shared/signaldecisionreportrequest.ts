import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignalDecisionReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=client_transaction_id" })
  clientTransactionId: string;

  @SpeakeasyMetadata({ data: "json, name=initiated" })
  initiated: boolean;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
