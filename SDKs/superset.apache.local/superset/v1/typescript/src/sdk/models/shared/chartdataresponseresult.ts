import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ChartDataResponseResultStatusEnum {
    Stopped = "stopped",
    Failed = "failed",
    Pending = "pending",
    Running = "running",
    Scheduled = "scheduled",
    Success = "success",
    TimedOut = "timed_out"
}


export class ChartDataResponseResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotation_data" })
  annotationData?: Map<string, string>[];

  @SpeakeasyMetadata({ data: "json, name=applied_filters" })
  appliedFilters?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=cache_key" })
  cacheKey: string;

  @SpeakeasyMetadata({ data: "json, name=cache_timeout" })
  cacheTimeout: number;

  @SpeakeasyMetadata({ data: "json, name=cached_dttm" })
  cachedDttm: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=is_cached" })
  isCached: boolean;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "json, name=rejected_filters" })
  rejectedFilters?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=rowcount" })
  rowcount?: number;

  @SpeakeasyMetadata({ data: "json, name=stacktrace" })
  stacktrace?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ChartDataResponseResultStatusEnum;
}
