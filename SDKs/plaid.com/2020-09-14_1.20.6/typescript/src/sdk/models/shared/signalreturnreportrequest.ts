import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignalReturnReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=client_transaction_id" })
  clientTransactionId: string;

  @SpeakeasyMetadata({ data: "json, name=return_code" })
  returnCode: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
