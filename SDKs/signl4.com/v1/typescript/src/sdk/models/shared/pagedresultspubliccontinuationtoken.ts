import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PagedResultsPublicContinuationToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPartitionKey" })
  nextPartitionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=nextRowKey" })
  nextRowKey?: string;

  @SpeakeasyMetadata({ data: "json, name=nextTableName" })
  nextTableName?: string;
}
