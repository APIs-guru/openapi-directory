import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TransactionsImportResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transaction_ids" })
  transactionIds: string[];
}


export class TransactionsImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: TransactionsImportResponseData;
}
