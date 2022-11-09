import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignalReturnReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_id" })
  clientId?: string;

  @Metadata({ data: "json, name=client_transaction_id" })
  clientTransactionId: string;

  @Metadata({ data: "json, name=return_code" })
  returnCode: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
