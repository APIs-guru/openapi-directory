import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PagedResultsPublicContinuationToken } from "./pagedresultspubliccontinuationtoken";
import { OverviewEvent } from "./overviewevent";


export class OverviewEventPagedResultsPublic extends SpeakeasyBase {
  @Metadata({ data: "json, name=continuationToken" })
  continuationToken?: PagedResultsPublicContinuationToken;

  @Metadata({ data: "json, name=hasMore" })
  hasMore?: boolean;

  @Metadata({ data: "json, name=results", elemType: shared.OverviewEvent })
  results?: OverviewEvent[];
}
