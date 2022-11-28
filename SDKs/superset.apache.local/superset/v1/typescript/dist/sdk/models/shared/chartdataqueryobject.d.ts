import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationLayer } from "./annotationlayer";
import { ChartDataFilter } from "./chartdatafilter";
export declare enum ChartDataQueryObjectDatasourceTypeEnum {
    Druid = "druid",
    Table = "table"
}
export declare class ChartDataQueryObjectDatasource extends SpeakeasyBase {
    id: number;
    type?: ChartDataQueryObjectDatasourceTypeEnum;
}
export declare enum ChartDataQueryObjectExtrasRelativeEndEnum {
    Today = "today",
    Now = "now"
}
export declare enum ChartDataQueryObjectExtrasRelativeStartEnum {
    Today = "today",
    Now = "now"
}
export declare enum ChartDataQueryObjectExtrasTimeGrainSqlaEnum {
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
/**
 * Extra parameters to add to the query.
**/
export declare class ChartDataQueryObjectExtras extends SpeakeasyBase {
    druidTimeOrigin?: string;
    having?: string;
    havingDruid?: ChartDataFilter[];
    relativeEnd?: ChartDataQueryObjectExtrasRelativeEndEnum;
    relativeStart?: ChartDataQueryObjectExtrasRelativeStartEnum;
    timeGrainSqla?: ChartDataQueryObjectExtrasTimeGrainSqlaEnum;
    timeRangeEndpoints?: any[];
    where?: string;
}
export declare enum ChartDataQueryObjectPostProcessingOperationEnum {
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
export declare class ChartDataQueryObjectPostProcessing extends SpeakeasyBase {
    operation: ChartDataQueryObjectPostProcessingOperationEnum;
    options?: Map<string, any>;
}
export declare class ChartDataQueryObject extends SpeakeasyBase {
    annotationLayers?: AnnotationLayer[];
    appliedTimeExtras?: Map<string, any>;
    applyFetchValuesPredicate?: boolean;
    columns?: string[];
    datasource?: ChartDataQueryObjectDatasource;
    druidTimeOrigin?: string;
    extras?: ChartDataQueryObjectExtras;
    filters?: ChartDataFilter[];
    granularity?: string;
    granularitySqla?: string;
    groupby?: string[];
    having?: string;
    havingFilters?: ChartDataFilter[];
    isRowcount?: boolean;
    isTimeseries?: boolean;
    metrics?: any[];
    orderDesc?: boolean;
    orderby?: any[];
    postProcessing?: ChartDataQueryObjectPostProcessing[];
    resultType?: any;
    rowLimit?: number;
    rowOffset?: number;
    timeOffsets?: string[];
    timeRange?: string;
    timeShift?: string;
    timeseriesLimit?: number;
    timeseriesLimitMetric?: any;
    urlParams?: Map<string, string>;
    where?: string;
}
