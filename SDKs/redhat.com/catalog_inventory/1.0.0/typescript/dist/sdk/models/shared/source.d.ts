import { SpeakeasyBase } from "../../../internal/utils";
export declare class Source extends SpeakeasyBase {
    archivedAt?: Date;
    availabilityMessage?: string;
    availabilityStatus?: string;
    cloudConnectorId?: string;
    createdAt?: Date;
    enabled?: boolean;
    id?: string;
    info?: Map<string, any>;
    lastAvailableAt?: Date;
    lastCheckedAt?: Date;
    lastRefreshMessage?: string;
    lastSuccessfulRefreshAt?: Date;
    name?: string;
    previousSha?: string;
    previousSize?: number;
    refreshFinishedAt?: Date;
    refreshStartedAt?: Date;
    refreshState?: string;
    refreshTaskId?: string;
    uid?: string;
    updatedAt?: Date;
}
