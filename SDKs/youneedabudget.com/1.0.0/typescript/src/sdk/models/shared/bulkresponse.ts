import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BulkResponseDataBulk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duplicate_import_ids" })
  duplicateImportIds: string[];

  @SpeakeasyMetadata({ data: "json, name=transaction_ids" })
  transactionIds: string[];
}


export class BulkResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bulk" })
  bulk: BulkResponseDataBulk;
}


export class BulkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: BulkResponseData;
}
