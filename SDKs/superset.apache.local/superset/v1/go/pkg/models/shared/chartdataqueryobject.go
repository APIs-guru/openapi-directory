package shared

type ChartDataQueryObjectDatasourceTypeEnum string

const (
	ChartDataQueryObjectDatasourceTypeEnumDruid ChartDataQueryObjectDatasourceTypeEnum = "druid"
	ChartDataQueryObjectDatasourceTypeEnumTable ChartDataQueryObjectDatasourceTypeEnum = "table"
)

type ChartDataQueryObjectDatasource struct {
	ID   int32                                   `json:"id"`
	Type *ChartDataQueryObjectDatasourceTypeEnum `json:"type"`
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
	DruidTimeOrigin    *string                                      `json:"druid_time_origin"`
	Having             *string                                      `json:"having"`
	HavingDruid        []ChartDataFilter                            `json:"having_druid"`
	RelativeEnd        *ChartDataQueryObjectExtrasRelativeEndEnum   `json:"relative_end"`
	RelativeStart      *ChartDataQueryObjectExtrasRelativeStartEnum `json:"relative_start"`
	TimeGrainSqla      *ChartDataQueryObjectExtrasTimeGrainSqlaEnum `json:"time_grain_sqla"`
	TimeRangeEndpoints []interface{}                                `json:"time_range_endpoints"`
	Where              *string                                      `json:"where"`
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
	Options   map[string]interface{}                          `json:"options"`
}

type ChartDataQueryObject struct {
	AnnotationLayers          []AnnotationLayer                    `json:"annotation_layers"`
	AppliedTimeExtras         map[string]interface{}               `json:"applied_time_extras"`
	ApplyFetchValuesPredicate *bool                                `json:"apply_fetch_values_predicate"`
	Columns                   []string                             `json:"columns"`
	Datasource                *ChartDataQueryObjectDatasource      `json:"datasource"`
	DruidTimeOrigin           *string                              `json:"druid_time_origin"`
	Extras                    *ChartDataQueryObjectExtras          `json:"extras"`
	Filters                   []ChartDataFilter                    `json:"filters"`
	Granularity               *string                              `json:"granularity"`
	GranularitySqla           *string                              `json:"granularity_sqla"`
	Groupby                   []string                             `json:"groupby"`
	Having                    *string                              `json:"having"`
	HavingFilters             []ChartDataFilter                    `json:"having_filters"`
	IsRowcount                *bool                                `json:"is_rowcount"`
	IsTimeseries              *bool                                `json:"is_timeseries"`
	Metrics                   []interface{}                        `json:"metrics"`
	OrderDesc                 *bool                                `json:"order_desc"`
	Orderby                   []interface{}                        `json:"orderby"`
	PostProcessing            []ChartDataQueryObjectPostProcessing `json:"post_processing"`
	ResultType                *interface{}                         `json:"result_type"`
	RowLimit                  *int32                               `json:"row_limit"`
	RowOffset                 *int32                               `json:"row_offset"`
	TimeOffsets               []string                             `json:"time_offsets"`
	TimeRange                 *string                              `json:"time_range"`
	TimeShift                 *string                              `json:"time_shift"`
	TimeseriesLimit           *int32                               `json:"timeseries_limit"`
	TimeseriesLimitMetric     *interface{}                         `json:"timeseries_limit_metric"`
	URLParams                 map[string]string                    `json:"url_params"`
	Where                     *string                              `json:"where"`
}
