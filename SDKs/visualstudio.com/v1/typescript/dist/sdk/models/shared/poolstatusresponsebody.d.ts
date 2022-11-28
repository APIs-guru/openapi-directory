import { SpeakeasyBase } from "../../../internal/utils";
export declare class PoolStatusResponseBody extends SpeakeasyBase {
    allWithLatestVersion?: boolean;
    isEnvironmentPool?: boolean;
    location?: string;
    poolCode?: string;
    readyUnassignedCount?: number;
    readyUnassignedLatestVersionCount?: number;
    readyUnassignedNotLatestVersionCount?: number;
    resourceType?: string;
    sku?: string;
}
