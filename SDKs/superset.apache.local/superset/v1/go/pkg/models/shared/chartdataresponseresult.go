package shared

type ChartDataResponseResultStatusEnum string

const (
	ChartDataResponseResultStatusEnumStopped   ChartDataResponseResultStatusEnum = "stopped"
	ChartDataResponseResultStatusEnumFailed    ChartDataResponseResultStatusEnum = "failed"
	ChartDataResponseResultStatusEnumPending   ChartDataResponseResultStatusEnum = "pending"
	ChartDataResponseResultStatusEnumRunning   ChartDataResponseResultStatusEnum = "running"
	ChartDataResponseResultStatusEnumScheduled ChartDataResponseResultStatusEnum = "scheduled"
	ChartDataResponseResultStatusEnumSuccess   ChartDataResponseResultStatusEnum = "success"
	ChartDataResponseResultStatusEnumTimedOut  ChartDataResponseResultStatusEnum = "timed_out"
)

type ChartDataResponseResult struct {
	AnnotationData  []map[string]string                `json:"annotation_data"`
	AppliedFilters  []map[string]interface{}           `json:"applied_filters"`
	CacheKey        string                             `json:"cache_key"`
	CacheTimeout    int32                              `json:"cache_timeout"`
	CachedDttm      string                             `json:"cached_dttm"`
	Data            []map[string]interface{}           `json:"data"`
	Error           *string                            `json:"error"`
	IsCached        bool                               `json:"is_cached"`
	Query           string                             `json:"query"`
	RejectedFilters []map[string]interface{}           `json:"rejected_filters"`
	Rowcount        *int32                             `json:"rowcount"`
	Stacktrace      *string                            `json:"stacktrace"`
	Status          *ChartDataResponseResultStatusEnum `json:"status"`
}
