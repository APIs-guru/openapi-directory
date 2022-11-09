import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TransactionDetail } from "./transactiondetail";
import { TransactionDetail } from "./transactiondetail";


export class SaveTransactionsResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=duplicate_import_ids" })
  duplicateImportIds?: string[];

  @Metadata({ data: "json, name=server_knowledge" })
  serverKnowledge: number;

  @Metadata({ data: "json, name=transaction" })
  transaction?: TransactionDetail;

  @Metadata({ data: "json, name=transaction_ids" })
  transactionIds: string[];

  @Metadata({ data: "json, name=transactions", elemType: shared.TransactionDetail })
  transactions?: TransactionDetail[];
}


export class SaveTransactionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: SaveTransactionsResponseData;
}
