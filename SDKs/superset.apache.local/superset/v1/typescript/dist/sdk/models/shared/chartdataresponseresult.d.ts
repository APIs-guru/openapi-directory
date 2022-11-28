import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChartDataResponseResultStatusEnum {
    Stopped = "stopped",
    Failed = "failed",
    Pending = "pending",
    Running = "running",
    Scheduled = "scheduled",
    Success = "success",
    TimedOut = "timed_out"
}
export declare class ChartDataResponseResult extends SpeakeasyBase {
    annotationData?: Map<string, string>[];
    appliedFilters?: Map<string, any>[];
    cacheKey: string;
    cacheTimeout: number;
    cachedDttm: string;
    data?: Map<string, any>[];
    error?: string;
    isCached: boolean;
    query: string;
    rejectedFilters?: Map<string, any>[];
    rowcount?: number;
    stacktrace?: string;
    status?: ChartDataResponseResultStatusEnum;
}
