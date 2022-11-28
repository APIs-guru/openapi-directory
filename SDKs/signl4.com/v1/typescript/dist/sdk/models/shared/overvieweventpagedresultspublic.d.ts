import { SpeakeasyBase } from "../../../internal/utils";
import { PagedResultsPublicContinuationToken } from "./pagedresultspubliccontinuationtoken";
import { OverviewEvent } from "./overviewevent";
export declare class OverviewEventPagedResultsPublic extends SpeakeasyBase {
    continuationToken?: PagedResultsPublicContinuationToken;
    hasMore?: boolean;
    results?: OverviewEvent[];
}
