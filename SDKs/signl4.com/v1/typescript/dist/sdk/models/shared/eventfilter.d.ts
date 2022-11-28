import { SpeakeasyBase } from "../../../internal/utils";
import { PagedResultsPublicContinuationToken } from "./pagedresultspubliccontinuationtoken";
export declare class EventFilter extends SpeakeasyBase {
    continuationToken?: PagedResultsPublicContinuationToken;
    eventStatusCode?: number;
    maxCreationDate?: Date;
    minCreationDate?: Date;
    modifiedSince?: Date;
    teamId?: string;
    textToSearch?: string;
}
