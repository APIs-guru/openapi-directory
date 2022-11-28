import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagedResultsPublicContinuationToken } from "./pagedresultspubliccontinuationtoken";
import { OverviewAlert } from "./overviewalert";



export class OverviewAlertPagedResultsPublic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=continuationToken" })
  continuationToken?: PagedResultsPublicContinuationToken;

  @SpeakeasyMetadata({ data: "json, name=hasMore" })
  hasMore?: boolean;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: OverviewAlert })
  results?: OverviewAlert[];
}
