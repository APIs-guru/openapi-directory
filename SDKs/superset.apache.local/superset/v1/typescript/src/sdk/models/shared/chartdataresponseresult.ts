import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChartDataResponseResultStatusEnum {
    Stopped = "stopped"
,    Failed = "failed"
,    Pending = "pending"
,    Running = "running"
,    Scheduled = "scheduled"
,    Success = "success"
,    TimedOut = "timed_out"
}


export class ChartDataResponseResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotation_data" })
  annotationData?: Map<string, string>[];

  @Metadata({ data: "json, name=applied_filters" })
  appliedFilters?: Map<string, any>[];

  @Metadata({ data: "json, name=cache_key" })
  cacheKey: string;

  @Metadata({ data: "json, name=cache_timeout" })
  cacheTimeout: number;

  @Metadata({ data: "json, name=cached_dttm" })
  cachedDttm: string;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>[];

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=is_cached" })
  isCached: boolean;

  @Metadata({ data: "json, name=query" })
  query: string;

  @Metadata({ data: "json, name=rejected_filters" })
  rejectedFilters?: Map<string, any>[];

  @Metadata({ data: "json, name=rowcount" })
  rowcount?: number;

  @Metadata({ data: "json, name=stacktrace" })
  stacktrace?: string;

  @Metadata({ data: "json, name=status" })
  status?: ChartDataResponseResultStatusEnum;
}
