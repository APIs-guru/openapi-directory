import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePayeesCsvResponse2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: string;

  @Metadata({ data: "json, name=rejectedCsvRows" })
  rejectedCsvRows?: any[];
}
