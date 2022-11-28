import { SpeakeasyBase } from "../../../internal/utils";
import { PagedResultsPublicContinuationToken } from "./pagedresultspubliccontinuationtoken";
export declare class AlertFilterPublic extends SpeakeasyBase {
    alertIds?: string[];
    alertsAfterId?: string;
    categoryIds?: string[];
    continuationToken?: PagedResultsPublicContinuationToken;
    maxCreationDate?: Date;
    minCreationDate?: Date;
    modifiedSince?: Date;
    showPersonalHiddenCategories?: boolean;
    statusCodes?: number;
    teamId?: string;
    textToSearch?: string;
}
