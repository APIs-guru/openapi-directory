import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BulkResponseDataBulk extends SpeakeasyBase {
  @Metadata({ data: "json, name=duplicate_import_ids" })
  duplicateImportIds: string[];

  @Metadata({ data: "json, name=transaction_ids" })
  transactionIds: string[];
}


export class BulkResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=bulk" })
  bulk: BulkResponseDataBulk;
}


export class BulkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: BulkResponseData;
}
