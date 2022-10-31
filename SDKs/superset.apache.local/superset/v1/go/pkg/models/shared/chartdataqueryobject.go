package shared

type ChartDataQueryObjectDatasourceTypeEnum string

const (
	ChartDataQueryObjectDatasourceTypeEnumDruid ChartDataQueryObjectDatasourceTypeEnum = "druid"
	ChartDataQueryObjectDatasourceTypeEnumTable ChartDataQueryObjectDatasourceTypeEnum = "table"
)

type ChartDataQueryObjectDatasource struct {
	ID   int32                                   `json:"id"`
	Type *ChartDataQueryObjectDatasourceTypeEnum `json:"type,omitempty"`
}

type ChartDataQueryObjectExtrasRelativeEndEnum string

const (
	ChartDataQueryObjectExtrasRelativeEndEnumToday ChartDataQueryObjectExtrasRelativeEndEnum = "today"
	ChartDataQueryObjectExtrasRelativeEndEnumNow   ChartDataQueryObjectExtrasRelativeEndEnum = "now"
)

type ChartDataQueryObjectExtrasRelativeStartEnum string

const (
	ChartDataQueryObjectExtrasRelativeStartEnumToday ChartDataQueryObjectExtrasRelativeStartEnum = "today"
	ChartDataQueryObjectExtrasRelativeStartEnumNow   ChartDataQueryObjectExtrasRelativeStartEnum = "now"
)

type ChartDataQueryObjectExtrasTimeGrainSqlaEnum string

const (
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumPt1S                                              ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "PT1S"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumPt5S                                              ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "PT5S"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumPt30S                                             ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "PT30S"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumPt1M                                              ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "PT1M"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumPt5M                                              ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "PT5M"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumPt10M                                             ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "PT10M"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumPt15M                                             ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "PT15M"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumPt05H                                             ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "PT0.5H"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumPt1H                                              ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "PT1H"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumPt6H                                              ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "PT6H"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumP1D                                               ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "P1D"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumP1W                                               ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "P1W"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumP1M                                               ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "P1M"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumP025Y                                             ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "P0.25Y"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumP1Y                                               ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "P1Y"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumOneThousandNineHundredAndSixtyNine1228T000000Zp1W ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "1969-12-28T00:00:00Z/P1W"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumOneThousandNineHundredAndSixtyNine1229T000000Zp1W ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "1969-12-29T00:00:00Z/P1W"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumP1W19700103T000000Z                               ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "P1W/1970-01-03T00:00:00Z"
	ChartDataQueryObjectExtrasTimeGrainSqlaEnumP1W19700104T000000Z                               ChartDataQueryObjectExtrasTimeGrainSqlaEnum = "P1W/1970-01-04T00:00:00Z"
)

type ChartDataQueryObjectExtras struct {
	DruidTimeOrigin    *string                                      `json:"druid_time_origin,omitempty"`
	Having             *string                                      `json:"having,omitempty"`
	HavingDruid        []ChartDataFilter                            `json:"having_druid,omitempty"`
	RelativeEnd        *ChartDataQueryObjectExtrasRelativeEndEnum   `json:"relative_end,omitempty"`
	RelativeStart      *ChartDataQueryObjectExtrasRelativeStartEnum `json:"relative_start,omitempty"`
	TimeGrainSqla      *ChartDataQueryObjectExtrasTimeGrainSqlaEnum `json:"time_grain_sqla,omitempty"`
	TimeRangeEndpoints []interface{}                                `json:"time_range_endpoints,omitempty"`
	Where              *string                                      `json:"where,omitempty"`
}

type ChartDataQueryObjectPostProcessingOperationEnum string

const (
	ChartDataQueryObjectPostProcessingOperationEnumAggregate     ChartDataQueryObjectPostProcessingOperationEnum = "aggregate"
	ChartDataQueryObjectPostProcessingOperationEnumBoxplot       ChartDataQueryObjectPostProcessingOperationEnum = "boxplot"
	ChartDataQueryObjectPostProcessingOperationEnumContribution  ChartDataQueryObjectPostProcessingOperationEnum = "contribution"
	ChartDataQueryObjectPostProcessingOperationEnumCum           ChartDataQueryObjectPostProcessingOperationEnum = "cum"
	ChartDataQueryObjectPostProcessingOperationEnumGeodeticParse ChartDataQueryObjectPostProcessingOperationEnum = "geodetic_parse"
	ChartDataQueryObjectPostProcessingOperationEnumGeohashDecode ChartDataQueryObjectPostProcessingOperationEnum = "geohash_decode"
	ChartDataQueryObjectPostProcessingOperationEnumGeohashEncode ChartDataQueryObjectPostProcessingOperationEnum = "geohash_encode"
	ChartDataQueryObjectPostProcessingOperationEnumPivot         ChartDataQueryObjectPostProcessingOperationEnum = "pivot"
	ChartDataQueryObjectPostProcessingOperationEnumProphet       ChartDataQueryObjectPostProcessingOperationEnum = "prophet"
	ChartDataQueryObjectPostProcessingOperationEnumRolling       ChartDataQueryObjectPostProcessingOperationEnum = "rolling"
	ChartDataQueryObjectPostProcessingOperationEnumSelect        ChartDataQueryObjectPostProcessingOperationEnum = "select"
	ChartDataQueryObjectPostProcessingOperationEnumSort          ChartDataQueryObjectPostProcessingOperationEnum = "sort"
	ChartDataQueryObjectPostProcessingOperationEnumDiff          ChartDataQueryObjectPostProcessingOperationEnum = "diff"
	ChartDataQueryObjectPostProcessingOperationEnumCompare       ChartDataQueryObjectPostProcessingOperationEnum = "compare"
)

type ChartDataQueryObjectPostProcessing struct {
	Operation ChartDataQueryObjectPostProcessingOperationEnum `json:"operation"`
	Options   map[string]interface{}                          `json:"options,omitempty"`
}

type ChartDataQueryObject struct {
	AnnotationLayers          []AnnotationLayer                    `json:"annotation_layers,omitempty"`
	AppliedTimeExtras         map[string]interface{}               `json:"applied_time_extras,omitempty"`
	ApplyFetchValuesPredicate *bool                                `json:"apply_fetch_values_predicate,omitempty"`
	Columns                   []string                             `json:"columns,omitempty"`
	Datasource                *ChartDataQueryObjectDatasource      `json:"datasource,omitempty"`
	DruidTimeOrigin           *string                              `json:"druid_time_origin,omitempty"`
	Extras                    *ChartDataQueryObjectExtras          `json:"extras,omitempty"`
	Filters                   []ChartDataFilter                    `json:"filters,omitempty"`
	Granularity               *string                              `json:"granularity,omitempty"`
	GranularitySqla           *string                              `json:"granularity_sqla,omitempty"`
	Groupby                   []string                             `json:"groupby,omitempty"`
	Having                    *string                              `json:"having,omitempty"`
	HavingFilters             []ChartDataFilter                    `json:"having_filters,omitempty"`
	IsRowcount                *bool                                `json:"is_rowcount,omitempty"`
	IsTimeseries              *bool                                `json:"is_timeseries,omitempty"`
	Metrics                   []interface{}                        `json:"metrics,omitempty"`
	OrderDesc                 *bool                                `json:"order_desc,omitempty"`
	Orderby                   []interface{}                        `json:"orderby,omitempty"`
	PostProcessing            []ChartDataQueryObjectPostProcessing `json:"post_processing,omitempty"`
	ResultType                *interface{}                         `json:"result_type,omitempty"`
	RowLimit                  *int32                               `json:"row_limit,omitempty"`
	RowOffset                 *int32                               `json:"row_offset,omitempty"`
	TimeOffsets               []string                             `json:"time_offsets,omitempty"`
	TimeRange                 *string                              `json:"time_range,omitempty"`
	TimeShift                 *string                              `json:"time_shift,omitempty"`
	TimeseriesLimit           *int32                               `json:"timeseries_limit,omitempty"`
	TimeseriesLimitMetric     *interface{}                         `json:"timeseries_limit_metric,omitempty"`
	URLParams                 map[string]string                    `json:"url_params,omitempty"`
	Where                     *string                              `json:"where,omitempty"`
}
