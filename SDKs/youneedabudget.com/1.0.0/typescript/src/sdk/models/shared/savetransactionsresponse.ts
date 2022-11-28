import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionDetail } from "./transactiondetail";



export class SaveTransactionsResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duplicate_import_ids" })
  duplicateImportIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: TransactionDetail;

  @SpeakeasyMetadata({ data: "json, name=transaction_ids" })
  transactionIds: string[];

  @SpeakeasyMetadata({ data: "json, name=transactions", elemType: TransactionDetail })
  transactions?: TransactionDetail[];
}


export class SaveTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: SaveTransactionsResponseData;
}
