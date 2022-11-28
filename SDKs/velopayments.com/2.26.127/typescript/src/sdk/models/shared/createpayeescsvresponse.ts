import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePayeesCsvResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: string;

  @SpeakeasyMetadata({ data: "json, name=rejectedCsvRows" })
  rejectedCsvRows?: any[];
}
