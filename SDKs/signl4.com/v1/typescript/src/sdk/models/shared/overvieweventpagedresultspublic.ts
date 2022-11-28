import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagedResultsPublicContinuationToken } from "./pagedresultspubliccontinuationtoken";
import { OverviewEvent } from "./overviewevent";



export class OverviewEventPagedResultsPublic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continuationToken" })
  continuationToken?: PagedResultsPublicContinuationToken;

  @SpeakeasyMetadata({ data: "json, name=hasMore" })
  hasMore?: boolean;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: OverviewEvent })
  results?: OverviewEvent[];
}
