import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PagedResultsPublicContinuationToken } from "./pagedresultspubliccontinuationtoken";
import { OverviewAlert } from "./overviewalert";


export class OverviewAlertPagedResultsPublic extends SpeakeasyBase {
  @Metadata({ data: "json, name=continuationToken" })
  continuationToken?: PagedResultsPublicContinuationToken;

  @Metadata({ data: "json, name=hasMore" })
  hasMore?: boolean;

  @Metadata({ data: "json, name=results", elemType: shared.OverviewAlert })
  results?: OverviewAlert[];
}
