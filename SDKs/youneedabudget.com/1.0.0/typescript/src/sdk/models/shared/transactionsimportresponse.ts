import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TransactionsImportResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=transaction_ids" })
  transactionIds: string[];
}


export class TransactionsImportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: TransactionsImportResponseData;
}
