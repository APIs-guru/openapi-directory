import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnnotationLayer } from "./annotationlayer";
import { ChartDataFilter } from "./chartdatafilter";


export enum ChartDataQueryObjectDatasourceTypeEnum {
    Druid = "druid",
    Table = "table"
}


export class ChartDataQueryObjectDatasource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ChartDataQueryObjectDatasourceTypeEnum;
}

export enum ChartDataQueryObjectExtrasRelativeEndEnum {
    Today = "today",
    Now = "now"
}

export enum ChartDataQueryObjectExtrasRelativeStartEnum {
    Today = "today",
    Now = "now"
}

export enum ChartDataQueryObjectExtrasTimeGrainSqlaEnum {
    Pt1S = "PT1S",
    Pt5S = "PT5S",
    Pt30S = "PT30S",
    Pt1M = "PT1M",
    Pt5M = "PT5M",
    Pt10M = "PT10M",
    Pt15M = "PT15M",
    Pt05H = "PT0.5H",
    Pt1H = "PT1H",
    Pt6H = "PT6H",
    P1D = "P1D",
    P1W = "P1W",
    P1M = "P1M",
    P025Y = "P0.25Y",
    P1Y = "P1Y",
    OneThousandNineHundredAndSixtyNine1228T000000ZP1W = "1969-12-28T00:00:00Z/P1W",
    OneThousandNineHundredAndSixtyNine1229T000000ZP1W = "1969-12-29T00:00:00Z/P1W",
    P1W19700103T000000Z = "P1W/1970-01-03T00:00:00Z",
    P1W19700104T000000Z = "P1W/1970-01-04T00:00:00Z"
}


// ChartDataQueryObjectExtras
/** 
 * Extra parameters to add to the query.
**/
export class ChartDataQueryObjectExtras extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=druid_time_origin" })
  druidTimeOrigin?: string;

  @SpeakeasyMetadata({ data: "json, name=having" })
  having?: string;

  @SpeakeasyMetadata({ data: "json, name=having_druid", elemType: ChartDataFilter })
  havingDruid?: ChartDataFilter[];

  @SpeakeasyMetadata({ data: "json, name=relative_end" })
  relativeEnd?: ChartDataQueryObjectExtrasRelativeEndEnum;

  @SpeakeasyMetadata({ data: "json, name=relative_start" })
  relativeStart?: ChartDataQueryObjectExtrasRelativeStartEnum;

  @SpeakeasyMetadata({ data: "json, name=time_grain_sqla" })
  timeGrainSqla?: ChartDataQueryObjectExtrasTimeGrainSqlaEnum;

  @SpeakeasyMetadata({ data: "json, name=time_range_endpoints" })
  timeRangeEndpoints?: any[];

  @SpeakeasyMetadata({ data: "json, name=where" })
  where?: string;
}

export enum ChartDataQueryObjectPostProcessingOperationEnum {
    Aggregate = "aggregate",
    Boxplot = "boxplot",
    Contribution = "contribution",
    Cum = "cum",
    GeodeticParse = "geodetic_parse",
    GeohashDecode = "geohash_decode",
    GeohashEncode = "geohash_encode",
    Pivot = "pivot",
    Prophet = "prophet",
    Rolling = "rolling",
    Select = "select",
    Sort = "sort",
    Diff = "diff",
    Compare = "compare"
}


export class ChartDataQueryObjectPostProcessing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation: ChartDataQueryObjectPostProcessingOperationEnum;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Map<string, any>;
}


export class ChartDataQueryObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotation_layers", elemType: AnnotationLayer })
  annotationLayers?: AnnotationLayer[];

  @SpeakeasyMetadata({ data: "json, name=applied_time_extras" })
  appliedTimeExtras?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=apply_fetch_values_predicate" })
  applyFetchValuesPredicate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: string[];

  @SpeakeasyMetadata({ data: "json, name=datasource" })
  datasource?: ChartDataQueryObjectDatasource;

  @SpeakeasyMetadata({ data: "json, name=druid_time_origin" })
  druidTimeOrigin?: string;

  @SpeakeasyMetadata({ data: "json, name=extras" })
  extras?: ChartDataQueryObjectExtras;

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: ChartDataFilter })
  filters?: ChartDataFilter[];

  @SpeakeasyMetadata({ data: "json, name=granularity" })
  granularity?: string;

  @SpeakeasyMetadata({ data: "json, name=granularity_sqla" })
  granularitySqla?: string;

  @SpeakeasyMetadata({ data: "json, name=groupby" })
  groupby?: string[];

  @SpeakeasyMetadata({ data: "json, name=having" })
  having?: string;

  @SpeakeasyMetadata({ data: "json, name=having_filters", elemType: ChartDataFilter })
  havingFilters?: ChartDataFilter[];

  @SpeakeasyMetadata({ data: "json, name=is_rowcount" })
  isRowcount?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_timeseries" })
  isTimeseries?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics?: any[];

  @SpeakeasyMetadata({ data: "json, name=order_desc" })
  orderDesc?: boolean;

  @SpeakeasyMetadata({ data: "json, name=orderby" })
  orderby?: any[];

  @SpeakeasyMetadata({ data: "json, name=post_processing", elemType: ChartDataQueryObjectPostProcessing })
  postProcessing?: ChartDataQueryObjectPostProcessing[];

  @SpeakeasyMetadata({ data: "json, name=result_type" })
  resultType?: any;

  @SpeakeasyMetadata({ data: "json, name=row_limit" })
  rowLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=row_offset" })
  rowOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=time_offsets" })
  timeOffsets?: string[];

  @SpeakeasyMetadata({ data: "json, name=time_range" })
  timeRange?: string;

  @SpeakeasyMetadata({ data: "json, name=time_shift" })
  timeShift?: string;

  @SpeakeasyMetadata({ data: "json, name=timeseries_limit" })
  timeseriesLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=timeseries_limit_metric" })
  timeseriesLimitMetric?: any;

  @SpeakeasyMetadata({ data: "json, name=url_params" })
  urlParams?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=where" })
  where?: string;
}
