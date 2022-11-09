import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PagedResultsPublicContinuationToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPartitionKey" })
  nextPartitionKey?: string;

  @Metadata({ data: "json, name=nextRowKey" })
  nextRowKey?: string;

  @Metadata({ data: "json, name=nextTableName" })
  nextTableName?: string;
}
