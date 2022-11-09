import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnnotationLayer } from "./annotationlayer";
import { ChartDataFilter } from "./chartdatafilter";
import { ChartDataFilter } from "./chartdatafilter";
import { ChartDataFilter } from "./chartdatafilter";

export enum ChartDataQueryObjectDatasourceTypeEnum {
    Druid = "druid"
,    Table = "table"
}


export class ChartDataQueryObjectDatasource extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=type" })
  type?: ChartDataQueryObjectDatasourceTypeEnum;
}

export enum ChartDataQueryObjectExtrasRelativeEndEnum {
    Today = "today"
,    Now = "now"
}

export enum ChartDataQueryObjectExtrasRelativeStartEnum {
    Today = "today"
,    Now = "now"
}

export enum ChartDataQueryObjectExtrasTimeGrainSqlaEnum {
    Pt1S = "PT1S"
,    Pt5S = "PT5S"
,    Pt30S = "PT30S"
,    Pt1M = "PT1M"
,    Pt5M = "PT5M"
,    Pt10M = "PT10M"
,    Pt15M = "PT15M"
,    Pt05H = "PT0.5H"
,    Pt1H = "PT1H"
,    Pt6H = "PT6H"
,    P1D = "P1D"
,    P1W = "P1W"
,    P1M = "P1M"
,    P025Y = "P0.25Y"
,    P1Y = "P1Y"
,    OneThousandNineHundredAndSixtyNine1228T000000ZP1W = "1969-12-28T00:00:00Z/P1W"
,    OneThousandNineHundredAndSixtyNine1229T000000ZP1W = "1969-12-29T00:00:00Z/P1W"
,    P1W19700103T000000Z = "P1W/1970-01-03T00:00:00Z"
,    P1W19700104T000000Z = "P1W/1970-01-04T00:00:00Z"
}


// ChartDataQueryObjectExtras
/** 
 * Extra parameters to add to the query.
**/
export class ChartDataQueryObjectExtras extends SpeakeasyBase {
  @Metadata({ data: "json, name=druid_time_origin" })
  druidTimeOrigin?: string;

  @Metadata({ data: "json, name=having" })
  having?: string;

  @Metadata({ data: "json, name=having_druid", elemType: shared.ChartDataFilter })
  havingDruid?: ChartDataFilter[];

  @Metadata({ data: "json, name=relative_end" })
  relativeEnd?: ChartDataQueryObjectExtrasRelativeEndEnum;

  @Metadata({ data: "json, name=relative_start" })
  relativeStart?: ChartDataQueryObjectExtrasRelativeStartEnum;

  @Metadata({ data: "json, name=time_grain_sqla" })
  timeGrainSqla?: ChartDataQueryObjectExtrasTimeGrainSqlaEnum;

  @Metadata({ data: "json, name=time_range_endpoints" })
  timeRangeEndpoints?: any[];

  @Metadata({ data: "json, name=where" })
  where?: string;
}

export enum ChartDataQueryObjectPostProcessingOperationEnum {
    Aggregate = "aggregate"
,    Boxplot = "boxplot"
,    Contribution = "contribution"
,    Cum = "cum"
,    GeodeticParse = "geodetic_parse"
,    GeohashDecode = "geohash_decode"
,    GeohashEncode = "geohash_encode"
,    Pivot = "pivot"
,    Prophet = "prophet"
,    Rolling = "rolling"
,    Select = "select"
,    Sort = "sort"
,    Diff = "diff"
,    Compare = "compare"
}


export class ChartDataQueryObjectPostProcessing extends SpeakeasyBase {
  @Metadata({ data: "json, name=operation" })
  operation: ChartDataQueryObjectPostProcessingOperationEnum;

  @Metadata({ data: "json, name=options" })
  options?: Map<string, any>;
}


export class ChartDataQueryObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotation_layers", elemType: shared.AnnotationLayer })
  annotationLayers?: AnnotationLayer[];

  @Metadata({ data: "json, name=applied_time_extras" })
  appliedTimeExtras?: Map<string, any>;

  @Metadata({ data: "json, name=apply_fetch_values_predicate" })
  applyFetchValuesPredicate?: boolean;

  @Metadata({ data: "json, name=columns" })
  columns?: string[];

  @Metadata({ data: "json, name=datasource" })
  datasource?: ChartDataQueryObjectDatasource;

  @Metadata({ data: "json, name=druid_time_origin" })
  druidTimeOrigin?: string;

  @Metadata({ data: "json, name=extras" })
  extras?: ChartDataQueryObjectExtras;

  @Metadata({ data: "json, name=filters", elemType: shared.ChartDataFilter })
  filters?: ChartDataFilter[];

  @Metadata({ data: "json, name=granularity" })
  granularity?: string;

  @Metadata({ data: "json, name=granularity_sqla" })
  granularitySqla?: string;

  @Metadata({ data: "json, name=groupby" })
  groupby?: string[];

  @Metadata({ data: "json, name=having" })
  having?: string;

  @Metadata({ data: "json, name=having_filters", elemType: shared.ChartDataFilter })
  havingFilters?: ChartDataFilter[];

  @Metadata({ data: "json, name=is_rowcount" })
  isRowcount?: boolean;

  @Metadata({ data: "json, name=is_timeseries" })
  isTimeseries?: boolean;

  @Metadata({ data: "json, name=metrics" })
  metrics?: any[];

  @Metadata({ data: "json, name=order_desc" })
  orderDesc?: boolean;

  @Metadata({ data: "json, name=orderby" })
  orderby?: any[];

  @Metadata({ data: "json, name=post_processing", elemType: shared.ChartDataQueryObjectPostProcessing })
  postProcessing?: ChartDataQueryObjectPostProcessing[];

  @Metadata({ data: "json, name=result_type" })
  resultType?: any;

  @Metadata({ data: "json, name=row_limit" })
  rowLimit?: number;

  @Metadata({ data: "json, name=row_offset" })
  rowOffset?: number;

  @Metadata({ data: "json, name=time_offsets" })
  timeOffsets?: string[];

  @Metadata({ data: "json, name=time_range" })
  timeRange?: string;

  @Metadata({ data: "json, name=time_shift" })
  timeShift?: string;

  @Metadata({ data: "json, name=timeseries_limit" })
  timeseriesLimit?: number;

  @Metadata({ data: "json, name=timeseries_limit_metric" })
  timeseriesLimitMetric?: any;

  @Metadata({ data: "json, name=url_params" })
  urlParams?: Map<string, string>;

  @Metadata({ data: "json, name=where" })
  where?: string;
}
