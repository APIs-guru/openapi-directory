import { SpeakeasyBase } from "../../../internal/utils";
import { PagedResultsPublicContinuationToken } from "./pagedresultspubliccontinuationtoken";
import { OverviewAlert } from "./overviewalert";
export declare class OverviewAlertPagedResultsPublic extends SpeakeasyBase {
    continuationToken?: PagedResultsPublicContinuationToken;
    hasMore?: boolean;
    results?: OverviewAlert[];
}
