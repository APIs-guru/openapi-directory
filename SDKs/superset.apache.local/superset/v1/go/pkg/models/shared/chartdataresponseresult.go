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
	AnnotationData  []map[string]string                `json:"annotation_data,omitempty"`
	AppliedFilters  []map[string]interface{}           `json:"applied_filters,omitempty"`
	CacheKey        string                             `json:"cache_key"`
	CacheTimeout    int32                              `json:"cache_timeout"`
	CachedDttm      string                             `json:"cached_dttm"`
	Data            []map[string]interface{}           `json:"data,omitempty"`
	Error           *string                            `json:"error,omitempty"`
	IsCached        bool                               `json:"is_cached"`
	Query           string                             `json:"query"`
	RejectedFilters []map[string]interface{}           `json:"rejected_filters,omitempty"`
	Rowcount        *int32                             `json:"rowcount,omitempty"`
	Stacktrace      *string                            `json:"stacktrace,omitempty"`
	Status          *ChartDataResponseResultStatusEnum `json:"status,omitempty"`
}
